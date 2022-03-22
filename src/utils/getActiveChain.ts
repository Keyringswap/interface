import { SupportedChainId } from '../constants/chains'
// export function getActiveChainBaseOnUrl(): number {
//   const subdomain = window.location.host.split('.')[1] ? window.location.host.split('.')[0] : false
//   switch (subdomain) {
//     case 'swap-eth':
//       return SupportedChainId.MAINNET
//     case 'swap-bsc':
//       return SupportedChainId.BSC_MAINNET
//     case 'swap-polygon':
//       return SupportedChainId.POLYGON_MAINET
//     case 'swap-mumbai':
//       return SupportedChainId.POLYGON_TESTNET
//     default:
//       return SupportedChainId.MAINNET
//   }
// }

export function getActiveChainBaseOnUrl(): number {
  // ex : http://localhost:3000/#/swap?chain=polygon
  //  http://localhost:3000/#/swap?chain=binance
  // https://swap.keyring.app/#/swap?chain=polygon&outputCurrency=0xc2132d05d31c914a87c6611c10748aeb04b58e8f
  let subdomain = window.location.href.split('swap?chain=').pop() || ''
  if (subdomain.includes('&outputCurrency')) {
    subdomain = subdomain.split('&')[0]
  }
  switch (subdomain) {
    case 'mainnet':
      return SupportedChainId.MAINNET
    case 'ropsten':
      return SupportedChainId.ROPSTEN
    case 'rinkeby':
      return SupportedChainId.RINKEBY
    case 'binance':
    case 'bsc':
      return SupportedChainId.BSC_MAINNET
    case 'polygon':
      return SupportedChainId.POLYGON_MAINET
    case 'mumbai':
    case 'polygon_mumbai':
      return SupportedChainId.POLYGON_TESTNET
    case 'goerli':
      return SupportedChainId.GOERLI
    case 'kovan':
      return SupportedChainId.KOVAN
    case 'avax':
      return SupportedChainId.AVALANCHE
    case 'fuji':
      return SupportedChainId.AVALANCHE_TESTNET
    case 'arbitrum':
      return SupportedChainId.ARBITRUM_ONE
    case 'arbitrum-test':
      return SupportedChainId.ARBITRUM_RINKEBY
    case 'optimism':
      return SupportedChainId.OPTIMISM
    case 'optimism-test':
      return SupportedChainId.OPTIMISTIC_KOVAN
    default:
      return SupportedChainId.MAINNET
  }
}
