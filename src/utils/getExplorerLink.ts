import { SupportedChainId } from '../constants/chains'

const ETHERSCAN_PREFIXES: { [chainId: number]: string } = {
  [SupportedChainId.MAINNET]: '',
  [SupportedChainId.ROPSTEN]: 'ropsten.',
  [SupportedChainId.RINKEBY]: 'rinkeby.',
  [SupportedChainId.GOERLI]: 'goerli.',
  [SupportedChainId.KOVAN]: 'kovan.',
  [SupportedChainId.OPTIMISM]: 'optimistic.',
  [SupportedChainId.OPTIMISTIC_KOVAN]: 'kovan-optimistic.',
}

export enum ExplorerDataType {
  TRANSACTION = 'transaction',
  TOKEN = 'token',
  ADDRESS = 'address',
  BLOCK = 'block',
}

/**
 * Return the explorer link for the given data and data type
 * @param chainId the ID of the chain for which to return the data
 * @param data the data to return a link for
 * @param type the type of the data
 */
export function getExplorerLink(chainId: number, data: string, type: ExplorerDataType): string {
  if (chainId === SupportedChainId.BSC_MAINNET) {
    switch (type) {
      case ExplorerDataType.TRANSACTION:
        return `https://bscscan.com/tx/${data}`
      case ExplorerDataType.ADDRESS:
      case ExplorerDataType.TOKEN:
        return `https://bscscan.com/address/${data}`
      case ExplorerDataType.BLOCK:
        return `https://bscscan.com/block/${data}`
      default:
        return `https://bscscan.com/`
    }
  }

  if (chainId === SupportedChainId.POLYGON_MAINET) {
    switch (type) {
      case ExplorerDataType.TRANSACTION:
        return `https://polygonscan.com/tx/${data}`
      case ExplorerDataType.ADDRESS:
      case ExplorerDataType.TOKEN:
        return `https://polygonscan.com/address/${data}`
      case ExplorerDataType.BLOCK:
        return `https://polygonscan.com/block/${data}`
      default:
        return `https://polygonscan.com/`
    }
  }

  if (chainId === SupportedChainId.POLYGON_TESTNET) {
    switch (type) {
      case ExplorerDataType.TRANSACTION:
        return `https://mumbai.polygonscan.com/tx/${data}`
      case ExplorerDataType.ADDRESS:
      case ExplorerDataType.TOKEN:
        return `https://mumbai.polygonscan.com/address/${data}`
      case ExplorerDataType.BLOCK:
        return `https://mumbai.polygonscan.com/block/${data}`
      default:
        return `https://mumbai.polygonscan.com/`
    }
  }

  if (chainId === SupportedChainId.AVALANCHE) {
    switch (type) {
      case ExplorerDataType.TRANSACTION:
        return `https://snowtrace.io/tx/${data}`
      case ExplorerDataType.ADDRESS:
      case ExplorerDataType.TOKEN:
        return `https://snowtrace.io/address/${data}`
      case ExplorerDataType.BLOCK:
        return `https://snowtrace.io/block/${data}`
      default:
        return `https://snowtrace.io/`
    }
  }

  if (chainId === SupportedChainId.AVALANCHE_TESTNET) {
    switch (type) {
      case ExplorerDataType.TRANSACTION:
        return `https://testnet.snowtrace.io/tx/${data}`
      case ExplorerDataType.ADDRESS:
      case ExplorerDataType.TOKEN:
        return `https://testnet.snowtrace.io/address/${data}`
      case ExplorerDataType.BLOCK:
        return `https://testnet.snowtrace.io/block/${data}`
      default:
        return `https://testnet.snowtrace.io/`
    }
  }

  if (chainId === SupportedChainId.ARBITRUM_ONE) {
    switch (type) {
      case ExplorerDataType.TRANSACTION:
        return `https://arbiscan.io/tx/${data}`
      case ExplorerDataType.ADDRESS:
      case ExplorerDataType.TOKEN:
        return `https://arbiscan.io/address/${data}`
      case ExplorerDataType.BLOCK:
        return `https://arbiscan.io/block/${data}`
      default:
        return `https://arbiscan.io/`
    }
  }

  if (chainId === SupportedChainId.ARBITRUM_RINKEBY) {
    switch (type) {
      case ExplorerDataType.TRANSACTION:
        return `https://rinkeby-explorer.arbitrum.io/tx/${data}`
      case ExplorerDataType.ADDRESS:
      case ExplorerDataType.TOKEN:
        return `https://rinkeby-explorer.arbitrum.io/address/${data}`
      case ExplorerDataType.BLOCK:
        return `https://rinkeby-explorer.arbitrum.io/block/${data}`
      default:
        return `https://rinkeby-explorer.arbitrum.io/`
    }
  }

  const prefix = `https://${ETHERSCAN_PREFIXES[chainId] ?? ''}etherscan.io`

  switch (type) {
    case ExplorerDataType.TRANSACTION:
      return `${prefix}/tx/${data}`

    case ExplorerDataType.TOKEN:
      return `${prefix}/token/${data}`

    case ExplorerDataType.BLOCK:
      if (chainId === SupportedChainId.OPTIMISM || chainId === SupportedChainId.OPTIMISTIC_KOVAN) {
        return `${prefix}/tx/${data}`
      }
      return `${prefix}/block/${data}`

    case ExplorerDataType.ADDRESS:
      return `${prefix}/address/${data}`
    default:
      return `${prefix}`
  }
}
