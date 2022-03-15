import { Web3Provider } from '@ethersproject/providers'
import { SafeAppConnector } from '@gnosis.pm/safe-apps-web3-react'
import { InjectedConnector } from '@web3-react/injected-connector'
import { PortisConnector } from '@web3-react/portis-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { isMobile } from 'utils/userAgent'

import UNISWAP_LOGO_URL from '../assets/svg/logo.svg'
import { ALL_SUPPORTED_CHAIN_IDS, SupportedChainId } from '../constants/chains'
import { getActiveChainBaseOnUrl } from '../utils/getActiveChain'
import getLibrary from '../utils/getLibrary'
import { FortmaticConnector } from './Fortmatic'
import { NetworkConnector } from './NetworkConnector'

const INFURA_KEY = 'd1fc98bbf52c4e79b193049e6342b0bf'
const FORMATIC_KEY = process.env.REACT_APP_FORTMATIC_KEY
const PORTIS_ID = process.env.REACT_APP_PORTIS_ID

if (typeof INFURA_KEY === 'undefined') {
  throw new Error(`REACT_APP_INFURA_KEY must be a defined environment variable`)
}

export const randomInfuraKey = () => {
  const keys = []
  for (let index = 1; index <= 10; index++) {
    const infuraIndex = 'REACT_APP_INFURA_KEY_' + index
    keys.push(process.env[infuraIndex])
  }
  const key = keys[Math.floor(Math.random() * keys.length)]
  return 'd1fc98bbf52c4e79b193049e6342b0bf'
}

const NETWORK_URLS = {
  [SupportedChainId.MAINNET]: `https://mainnet.infura.io/v3/${randomInfuraKey()}`,
  [SupportedChainId.RINKEBY]: `https://rinkeby.infura.io/v3/${randomInfuraKey()}`,
  [SupportedChainId.ROPSTEN]: `https://ropsten.infura.io/v3/${randomInfuraKey()}`,
  [SupportedChainId.GOERLI]: `https://goerli.infura.io/v3/${randomInfuraKey()}`,
  [SupportedChainId.KOVAN]: `https://kovan.infura.io/v3/${randomInfuraKey()}`,
  [SupportedChainId.OPTIMISM]: `https://optimism-mainnet.infura.io/v3/${randomInfuraKey()}`,
  [SupportedChainId.OPTIMISTIC_KOVAN]: `https://optimism-kovan.infura.io/v3/${randomInfuraKey()}`,
  [SupportedChainId.ARBITRUM_ONE]: `https://arbitrum-mainnet.infura.io/v3/${randomInfuraKey()}`,
  [SupportedChainId.ARBITRUM_RINKEBY]: `https://arbitrum-rinkeby.infura.io/v3/${randomInfuraKey()}`,
  [SupportedChainId.POLYGON_MAINET]: `https://polygon-rpc.com/`,
  [SupportedChainId.POLYGON_TESTNET]: `https://rpc-mumbai.matic.today`,
  [SupportedChainId.BSC_MAINNET]: `https://bsc-dataseed1.ninicoin.io`,
  [SupportedChainId.BSC_TESTNET]: `https://data-seed-prebsc-2-s1.binance.org:8545`,
  [SupportedChainId.AVALANCHE]: `https://api.avax.network/ext/bc/C/rpc`,
  [SupportedChainId.AVALANCHE_TESTNET]: `https://api.avax-test.network/ext/bc/C/rpc`,
}

export const network = new NetworkConnector({
  urls: NETWORK_URLS,
  defaultChainId: getActiveChainBaseOnUrl(),
})

let networkLibrary: Web3Provider | undefined
export function getNetworkLibrary(): Web3Provider {
  return (networkLibrary = networkLibrary ?? getLibrary(network.provider))
}

export const injected = new InjectedConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
})

export const gnosisSafe = new SafeAppConnector()

export const walletconnect = new WalletConnectConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
  rpc: NETWORK_URLS,
  qrcode: true,
  chainId: getActiveChainBaseOnUrl(),
  // pollingInterval: 15000,
})

export const keyringConnect = new WalletConnectConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
  rpc: NETWORK_URLS,
  qrcode: isMobile ? false : true,
  bridge: 'https://bridge.keyringpro.com',
  chainId: getActiveChainBaseOnUrl(),
})

// mainnet only
export const fortmatic = new FortmaticConnector({
  apiKey: FORMATIC_KEY ?? '',
  chainId: 1,
})

// mainnet only
export const portis = new PortisConnector({
  dAppId: PORTIS_ID ?? '',
  networks: [1],
})

// mainnet only
export const walletlink = new WalletLinkConnector({
  url: NETWORK_URLS[SupportedChainId.MAINNET],
  appName: 'Uniswap',
  appLogoUrl: UNISWAP_LOGO_URL,
})

export const getURI = async () => {
  new WalletConnectConnector({
    bridge: 'https://bridge.keyringpro.com',
    rpc: NETWORK_URLS,
    qrcode: true,
  })
}
