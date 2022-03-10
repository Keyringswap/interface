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
  // if (window.location.href === 'http://localhost:3000/#/swap') {
  //   console.log('first time')
  // } else {
  //   console.log('window.location.href', window.location.href)
  // }
  // const urlSearchParams = new URLSearchParams(window.location.href)
  // const params = Object.fromEntries(urlSearchParams.entries())
  // console.log('params', params, params[0])
  // console.log('window.location.host', window.location.host)

  // const subdomain = window.location.host.split('.')[1] ? window.location.host.split('.')[0] : false
  const subdomain = window.location.href.split('swap?chain=').pop()
  switch (subdomain) {
    case 'mainnet':
      return SupportedChainId.MAINNET
    case 'ropsten':
      return SupportedChainId.ROPSTEN
    case 'rinkeby':
      return SupportedChainId.RINKEBY
    case 'binance':
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
    default:
      return SupportedChainId.MAINNET
  }
}
