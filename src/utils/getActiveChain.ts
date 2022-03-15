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
  const subdomain = window.location.href.split('swap?chain=').pop()
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
    default:
      return SupportedChainId.MAINNET
  }
}
