import { BigNumber } from '@ethersproject/bignumber'
import { hexStripZeros } from '@ethersproject/bytes'
import { Web3Provider } from '@ethersproject/providers'
import { isAndroid } from '@walletconnect/browser-utils'
import { CHAIN_INFO, SupportedChainId } from 'constants/chains'
import { isMobile } from 'utils/userAgent'

import { addNetwork } from './addNetwork'

interface SwitchNetworkArguments {
  library: Web3Provider
  chainId?: SupportedChainId
}

// provider.request returns Promise<any>, but wallet_switchEthereumChain must return null or throw
// see https://github.com/rekmarks/EIPs/blob/3326-create/EIPS/eip-3326.md for more info on wallet_switchEthereumChain
export async function switchToNetwork({ library, chainId }: SwitchNetworkArguments): Promise<null | void> {
  if (!library?.provider?.request) {
    return
  }
  if (!chainId && library?.getNetwork) {
    ;({ chainId } = await library.getNetwork())
  }
  const formattedChainId = hexStripZeros(BigNumber.from(chainId).toHexString())
  try {
    await library?.provider.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: formattedChainId }],
    })
  } catch (error) {
    // 4902 is the error code for attempting to switch to an unrecognized chainId
    if (error.code === 4902 && chainId !== undefined) {
      const info = CHAIN_INFO[chainId]

      // metamask (only known implementer) automatically  switches after a network is added
      // the second call is done here because that behavior is not a part of the spec and cannot be relied upon in the future
      // metamask's behavior when switching to the current network is just to return null (a no-op)
      await addNetwork({ library, chainId, info })
      await switchToNetwork({ library, chainId })
    } else {
      throw error
    }
  }
}

export const deepLinkOpenDapp = (connector: any, nameCompare = 'keyring') => {
  try {
    const bridgeInfo = connector?.config?.bridge ?? ''
    if (bridgeInfo.includes(nameCompare) && isMobile) {
      if (connector && connector.walletConnectProvider) {
        const handshakeTopic =
          connector?.walletConnectProvider?.wc?._handshakeTopic ||
          connector?.walletConnectProvider?.signer?.connection?.wc?._handshakeTopic
        const uri = `wc:${handshakeTopic}@1`
        // window.location.href = isAndroid() ? `https://keyring.app/wc?uri=${uri}` : `keyring://keyring.app/wc?uri=${uri}`
        // window.location.href = `keyring://wc/wc?uri=${encodeURIComponent(uri)}`
        // window.location.href = isAndroid()
        //   ? `keyring://wc/wc?uri=${encodeURIComponent(uri)}`
        //   : `keyring://keyring.app/wc?uri=${uri}`
        window.location.href = `keyring://wc/wc?uri=${encodeURIComponent(uri)}`
      }
    }
  } catch (e) {}
}
