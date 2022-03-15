/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { Trans } from '@lingui/macro'
import {
  ARBITRUM_HELP_CENTER_LINK,
  CHAIN_IDS_TO_NAMES,
  CHAIN_INFO,
  L2_CHAIN_IDS,
  OPTIMISM_HELP_CENTER_LINK,
  SupportedChainId,
  SupportedL2ChainId,
} from 'constants/chains'
import useDefaultChainId from 'hooks/useDefaultChainId'
import { useOnClickOutside } from 'hooks/useOnClickOutside'
import useParsedQueryString from 'hooks/useParsedQueryString'
import usePrevious from 'hooks/usePrevious'
import { useActiveWeb3React } from 'hooks/web3'
import { ParsedQs } from 'qs'
import { useCallback, useEffect, useRef } from 'react'
import { ArrowDownCircle, ChevronDown } from 'react-feather'
import { useHistory } from 'react-router-dom'
import { useModalOpen, useToggleModal } from 'state/application/hooks'
import { addPopup, ApplicationModal, updateChainId } from 'state/application/reducer'
import { useAppDispatch, useAppSelector } from 'state/hooks'
import styled from 'styled-components/macro'
import { ExternalLink, MEDIA_WIDTHS } from 'theme'
import { getActiveChainBaseOnUrl } from 'utils/getActiveChain'
import { replaceURLParam } from 'utils/routes'
import { supportedChainId } from 'utils/supportedChainId'
import { switchToNetwork } from 'utils/switchToNetwork'

const ActiveRowLinkList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 8px;
  & > a {
    align-items: center;
    color: ${({ theme }) => theme.text2};
    display: flex;
    flex-direction: row;
    font-size: 14px;
    font-weight: 500;
    justify-content: space-between;
    padding: 8px 0 4px;
    text-decoration: none;
  }
  & > a:first-child {
    border-top: 1px solid ${({ theme }) => theme.text2};
    margin: 0;
    margin-top: 6px;
    padding-top: 10px;
  }
`
const ActiveRowWrapper = styled.div`
  background-color: ${({ theme }) => theme.bg2};
  border-radius: 8px;
  cursor: pointer;
  padding: 8px 0 8px 0;
  width: 100%;
`
const FlyoutHeader = styled.div`
  color: ${({ theme }) => theme.text2};
  font-weight: 400;
`
const FlyoutMenu = styled.div`
  align-items: flex-start;
  background-color: ${({ theme }) => theme.bg1};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  overflow: auto;
  padding: 16px;
  position: absolute;
  top: 64px;
  width: 272px;
  z-index: 99;
  & > *:not(:last-child) {
    margin-bottom: 12px;
  }
  @media screen and (min-width: ${MEDIA_WIDTHS.upToSmall}px) {
    top: 50px;
  }
`
const FlyoutRow = styled.div<{ active: boolean }>`
  align-items: center;
  background-color: ${({ active, theme }) => (active ? theme.bg2 : 'transparent')};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  font-weight: 500;
  justify-content: space-between;
  padding: 6px 8px;
  text-align: left;
  width: 100%;
`
const FlyoutRowActiveIndicator = styled.div`
  background-color: ${({ theme }) => theme.green1};
  border-radius: 50%;
  height: 9px;
  width: 9px;
`
const LinkOutCircle = styled(ArrowDownCircle)`
  transform: rotate(230deg);
  width: 16px;
  height: 16px;
`
const Logo = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 8px;
`
const NetworkLabel = styled.div`
  flex: 1 1 auto;
`
const SelectorLabel = styled(NetworkLabel)`
  display: none;
  @media screen and (min-width: ${MEDIA_WIDTHS.upToSmall}px) {
    display: block;
    margin-right: 8px;
  }
`
const SelectorControls = styled.div<{ interactive: boolean }>`
  align-items: center;
  background-color: ${({ theme }) => theme.bg1};
  border: 2px solid ${({ theme }) => theme.bg1};
  border-radius: 12px;
  color: ${({ theme }) => theme.text1};
  cursor: ${({ interactive }) => (interactive ? 'pointer' : 'auto')};
  display: flex;
  font-weight: 500;
  justify-content: space-between;
  padding: 6px 8px;
`
const SelectorLogo = styled(Logo)<{ interactive?: boolean }>`
  margin-right: ${({ interactive }) => (interactive ? 8 : 0)}px;
  @media screen and (min-width: ${MEDIA_WIDTHS.upToSmall}px) {
    margin-right: 8px;
  }
`
const SelectorWrapper = styled.div`
  @media screen and (min-width: ${MEDIA_WIDTHS.upToSmall}px) {
    position: relative;
  }
`
const StyledChevronDown = styled(ChevronDown)`
  width: 12px;
`
const BridgeText = ({ chainId }: { chainId: SupportedL2ChainId }) => {
  switch (chainId) {
    case SupportedChainId.ARBITRUM_ONE:
    case SupportedChainId.ARBITRUM_RINKEBY:
      return <Trans>Arbitrum Bridge</Trans>
    case SupportedChainId.OPTIMISM:
    case SupportedChainId.OPTIMISTIC_KOVAN:
      return <Trans>Optimism Gateway</Trans>
    default:
      return <Trans>Bridge</Trans>
  }
}
const ExplorerText = ({ chainId }: { chainId: SupportedL2ChainId }) => {
  switch (chainId) {
    case SupportedChainId.ARBITRUM_ONE:
    case SupportedChainId.ARBITRUM_RINKEBY:
      return <Trans>Arbiscan</Trans>
    case SupportedChainId.OPTIMISM:
    case SupportedChainId.OPTIMISTIC_KOVAN:
      return <Trans>Optimistic Etherscan</Trans>
    default:
      return <Trans>Explorer</Trans>
  }
}
const getChainIdFromName = (name: string) => {
  const entry = Object.entries(CHAIN_IDS_TO_NAMES).find(([_, n]) => n === name)
  const chainId = entry?.[0]
  return chainId ? parseInt(chainId) : undefined
}

const getParsedChainId = (parsedQs?: ParsedQs) => {
  const chain = parsedQs?.chain
  if (!chain || typeof chain !== 'string') return { urlChain: undefined, urlChainId: undefined }

  return { urlChain: chain.toLowerCase(), urlChainId: getChainIdFromName(chain) }
}

const getChainNameFromId = (id: string | number) => {
  // casting here may not be right but fine to return undefined if it's not a supported chain ID
  const data = CHAIN_IDS_TO_NAMES[id as SupportedChainId] || ''
  console.log('data', data, id)
  return data
}

export default function NetworkSelector() {
  const { library, account } = useActiveWeb3React()

  const [chainId] = useDefaultChainId()
  const prevChainId = usePrevious(chainId)
  const parsedQs = useParsedQueryString()
  const { urlChain, urlChainId } = getParsedChainId(parsedQs)
  const firstTime = useRef(true)
  const node = useRef<HTMLDivElement>()
  const open = useModalOpen(ApplicationModal.NETWORK_SELECTOR)
  const toggle = useToggleModal(ApplicationModal.NETWORK_SELECTOR)
  useOnClickOutside(node, open ? toggle : undefined)
  const implements3085 = useAppSelector((state) => state.application.implements3085)
  const info = chainId ? CHAIN_INFO[chainId] : urlChainId ? CHAIN_INFO[urlChainId] : undefined
  // console.log('urlChainId', urlChainId)
  // console.log('info', info)
  // console.log('chainId', chainId)
  // const isOnL2 = chainId ? L2_CHAIN_IDS.includes(chainId) : false
  const isOnL2 = true
  const showSelector = Boolean(implements3085 || isOnL2)
  // Only switch chain when active account
  // const mainnetInfo = CHAIN_INFO[chainId ?? getActiveChainBaseOnUrl()]

  const history = useHistory()
  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   if (
  //     urlChainId !== -1 &&
  //     chainId !== urlChainId &&
  //     firstTime.current === true &&
  //     account !== null &&
  //     account !== undefined
  //   ) {
  //     firstTime.current = false
  //     if (!library) return
  //     switchToNetwork({ library, chainId: urlChainId })
  //   }
  // }, [chainId, urlChainId, library, account])

  const conditionalToggle = useCallback(() => {
    if (showSelector) {
      toggle()
    }
  }, [showSelector, toggle])

  const handleChainSwitch = useCallback(
    (targetChain: number, skipToggle?: boolean) => {
      if (!library) return
      switchToNetwork({ library, chainId: targetChain })
        .then(() => {
          if (!skipToggle) {
            toggle()
          }
          history.replace({
            search: replaceURLParam(history.location.search, 'chain', getChainNameFromId(targetChain)),
          })
          if (account === null || account === undefined) {
            window.location.reload()
          }
        })
        .catch((error) => {
          console.error('Failed to switch networks', error)

          // we want app network <-> chainId param to be in sync, so if user changes the network by changing the URL
          // but the request fails, revert the URL back to current chainId
          if (chainId) {
            history.replace({ search: replaceURLParam(history.location.search, 'chain', getChainNameFromId(chainId)) })
          }

          if (!skipToggle) {
            toggle()
          }

          dispatch(addPopup({ content: { failedSwitchNetwork: targetChain }, key: `failed-network-switch` }))
        })
    },
    [dispatch, library, toggle, history, chainId, account]
  )

  function Row({ targetChain, onSelectChain }: { targetChain: number; onSelectChain: (targetChain: number) => void }) {
    const { library, chainId } = useActiveWeb3React()
    if (!library || !chainId) {
      console.log('RETURN NULL')
      return null
    }
    // const handleRowClick = () => {
    //   dispatch(updateChainId({ chainId: targetChain ? supportedChainId(targetChain) ?? null : null }))
    //   switchToNetwork({ library, chainId: targetChain })
    //     .then(() => {
    //       toggle()
    //       console.log('targetChain', targetChain)
    //       history.replace({
    //         search: replaceURLParam(history.location.search, 'chain', getChainNameFromId(targetChain)),
    //       })
    //     })
    //     .catch((error) => {
    //       console.log('Failed to switch networks', error)
    //       // we want app network <-> chainId param to be in sync, so if user changes the network by changing the URL
    //       // but the request fails, revert the URL back to current chainId
    //       if (chainId) {
    //         history.replace({ search: replaceURLParam(history.location.search, 'chain', getChainNameFromId(chainId)) })
    //       }
    //       toggle()

    //       dispatch(addPopup({ content: { failedSwitchNetwork: targetChain }, key: `failed-network-switch` }))
    //     })
    // }

    const active = chainId === targetChain
    const hasExtendedInfo = L2_CHAIN_IDS.includes(targetChain)
    const isOptimism = targetChain === SupportedChainId.OPTIMISM
    const rowText = `${CHAIN_INFO[targetChain].label}${isOptimism ? ' (Optimism)' : ''}`
    const RowContent = () => (
      <FlyoutRow onClick={() => onSelectChain(targetChain)} active={active}>
        <Logo src={CHAIN_INFO[targetChain].logoUrl} />
        <NetworkLabel>{rowText}</NetworkLabel>
        {chainId === targetChain && <FlyoutRowActiveIndicator />}
      </FlyoutRow>
    )
    const helpCenterLink = isOptimism ? OPTIMISM_HELP_CENTER_LINK : ARBITRUM_HELP_CENTER_LINK
    if (active && hasExtendedInfo) {
      return (
        <ActiveRowWrapper>
          <RowContent />
          <ActiveRowLinkList>
            <ExternalLink href={CHAIN_INFO[targetChain as SupportedL2ChainId].bridge}>
              <BridgeText chainId={chainId} /> <LinkOutCircle />
            </ExternalLink>
            <ExternalLink href={CHAIN_INFO[targetChain].explorer}>
              <ExplorerText chainId={chainId} /> <LinkOutCircle />
            </ExternalLink>
            <ExternalLink href={helpCenterLink}>
              <Trans>Help Center</Trans> <LinkOutCircle />
            </ExternalLink>
          </ActiveRowLinkList>
        </ActiveRowWrapper>
      )
    }
    return <RowContent />
  }

  useEffect(() => {
    if (!chainId || !prevChainId) return
    // when network change originates from wallet or dropdown selector, just update URL
    if (chainId !== prevChainId) {
      history.replace({ search: replaceURLParam(history.location.search, 'chain', getChainNameFromId(chainId)) })
      // otherwise assume network change originates from URL
    } else if (urlChainId && urlChainId !== chainId) {
      handleChainSwitch(urlChainId, true)
    }
  }, [chainId, urlChainId, prevChainId, handleChainSwitch, history, account])

  // set chain parameter on initial load if not there
  useEffect(() => {
    if (chainId && !urlChainId) {
      history.replace({ search: replaceURLParam(history.location.search, 'chain', getChainNameFromId(chainId)) })
    }
  }, [chainId, history, urlChainId, urlChain])
  if (!chainId || !info || !library) {
    return null
  }
  return (
    <SelectorWrapper ref={node as any}>
      <SelectorControls onClick={conditionalToggle} interactive={showSelector}>
        <SelectorLogo interactive={showSelector} src={info.logoUrl} />
        <SelectorLabel>{info.label}</SelectorLabel>
        {showSelector && <StyledChevronDown />}
      </SelectorControls>
      {/* <SelectorControls interactive>
        <SelectorLogo interactive src={info.logoUrl || mainnetInfo.logoUrl} />
        <SelectorLabel>{info.label}</SelectorLabel>
        <StyledChevronDown />
      </SelectorControls> */}
      {open && (
        <FlyoutMenu>
          <FlyoutHeader>
            <Trans>Select a network</Trans>
          </FlyoutHeader>
          <Row onSelectChain={handleChainSwitch} targetChain={SupportedChainId.MAINNET} />
          <Row onSelectChain={handleChainSwitch} targetChain={SupportedChainId.POLYGON_MAINET} />
          <Row onSelectChain={handleChainSwitch} targetChain={SupportedChainId.BSC_MAINNET} />
          <Row onSelectChain={handleChainSwitch} targetChain={SupportedChainId.AVALANCHE} />
          <Row onSelectChain={handleChainSwitch} targetChain={SupportedChainId.ARBITRUM_ONE} />
          <Row onSelectChain={handleChainSwitch} targetChain={SupportedChainId.OPTIMISM} />
        </FlyoutMenu>
      )}
    </SelectorWrapper>
  )
}
