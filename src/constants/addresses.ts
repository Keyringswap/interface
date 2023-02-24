import {
  FACTORY_ADDRESS as V2_UNI_FACTORY_ADDRESS,
  INIT_CODE_HASH as UNI_INIT_CODE_HASH,
} from '@duythao_bacoor/thaoswap-sdk'
import { FACTORY_ADDRESS as V2_FACTORY_ADDRESS, INIT_CODE_HASH as BACOOR_INIT_CONDE_HASH } from '@keyringswap/v2-sdk'
import {
  ChainId,
  FACTORY_ADDRESS as SUSHI_FACTORY_ADDRESS,
  INIT_CODE_HASH as SUSHI_INIT_CODE_HASH,
  ROUTER_ADDRESS,
} from '@sushiswap/sdk'
import { FACTORY_ADDRESS as V3_FACTORY_ADDRESS } from '@uniswap/v3-sdk'
import apeswapLogoUrl from 'assets/images/ape.png'
import babyswapLogoUrl from 'assets/images/babyswap.png'
import biswapLogoUrl from 'assets/images/biswap.png'
import kyberswapLogoUrl from 'assets/images/KNC.svg'
import pancakeswapLogoUrl from 'assets/images/pancake.png'
import pangolinLogoUrl from 'assets/images/pangolin.png'
import polycatLogoUrl from 'assets/images/polycat.png'
import polydexLogoUrl from 'assets/images/polydex.png'
import quickswapLogoUrl from 'assets/images/quickswap.png'
import shibaswapLogoUrl from 'assets/images/shiba.png'
import sushiswapLogoUrl from 'assets/images/sushi.svg'
import swapRLogoUrl from 'assets/images/swapr.svg'
import uniswapLogoUrl from 'assets/images/token-logo.png'
import traderjoeLogoUrl from 'assets/images/traderjoe.png'
import verseLogoUrl from 'assets/images/verse.png'

import { constructSameAddressMap } from '../utils/constructSameAddressMap'
import { SupportedChainId } from './chains'

export type AddressMap = { [chainId: number]: string }

export interface SwapInfo {
  readonly factoryAddresses: AddressMap
  readonly initCodeHash: string
  readonly routerAddress: AddressMap
}

export type ChainSwapName = { [chainId: number]: string[] }
export type ChainSwapMap = { [chaindId: number]: { [name: string]: SwapInfo } }

export const UNI_ADDRESS: AddressMap = constructSameAddressMap('0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984')
export const MULTICALL_ADDRESS: AddressMap = {
  ...constructSameAddressMap('0x1F98415757620B543A52E61c46B32eB19261F984', [
    SupportedChainId.OPTIMISM,
    SupportedChainId.OPTIMISTIC_KOVAN,
    SupportedChainId.POLYGON_MAINET,
  ]),
  // [SupportedChainId.OPTIMISM]: '0x90f872b3d8f33f305e0250db6A2761B354f7710A',
  [SupportedChainId.ARBITRUM_ONE]: '0xadF885960B47eA2CD9B55E6DAc6B42b7Cb2806dB',
  [SupportedChainId.ARBITRUM_RINKEBY]: '0xa501c031958F579dB7676fF1CE78AD305794d579',
  [SupportedChainId.POLYGON_MAINET]: '0x895CA06c053Ec87C17124c566DD511E6eC4eCcb6',
  [SupportedChainId.POLYGON_TESTNET]: '0x7aFd4508B74302E15f182032038EE7c827Cf7aDd',
  [SupportedChainId.BSC_MAINNET]: '0xAACf563D469027583392A03Fa92171047dEBC719',
  [SupportedChainId.AVALANCHE]: '0x895ca06c053ec87c17124c566dd511e6ec4eccb6',
  [SupportedChainId.AVALANCHE_TESTNET]: '0xfc498b7548175304e72c80e67324c8a306239abb',
}

export const BACOOR_SWAP = 'BacoorSwap'
export const UNI_SWAP = 'UniSwap'
export const SUSHI_SWAP = 'SushiSwap'
export const KYBER_SWAP = 'KyberSwap'
export const SHIBA_SWAP = 'ShibaSwap'
export const VERSE_SWAP = 'VerseSwap'
export const QUICK_SWAP = 'QuickSwap'
export const POLYCAT = 'PolyCat'
export const POLYDEX = 'PolyDex'

export const BI_SWAP = 'BiSwap'
export const PANCAKE_SWAP = 'PancakeSwap'
export const APE_SWAP = 'ApeSwap'
export const BABY_SWAP = 'BabySwap'

export const TRADER_JOE = 'TraderJoe'
export const PANGOLIN = 'Pangolin'
export const THORUS = 'Thorus'
export const ELK_FINANCE = 'Elk'

export const SWAPR = 'SwapR'

// Polygon testnet

export const BACOOR_ROUTER = '0x20E017D2605228CD369438e60C52aE038eC608d8'
export const UNI_ROUTER = '0x7D6361273b4D0d06b149B9639a983d88aBb56eD8'
export const SUSHI_ROUTER = ROUTER_ADDRESS[ChainId.MATIC_TESTNET]

export const V2_SUSHI_FACTORY_ADDRESS = SUSHI_FACTORY_ADDRESS[ChainId.MATIC_TESTNET]

export const V2_FACTORY_ADDRESSES: AddressMap = constructSameAddressMap(V2_FACTORY_ADDRESS)
export const V2_ROUTER_ADDRESS: AddressMap = constructSameAddressMap(BACOOR_ROUTER)

export const V2_UNI_FACTORY_ADDRESSES: AddressMap = constructSameAddressMap(V2_UNI_FACTORY_ADDRESS)
export const V2_UNI_ROUTER_ADDRESS: AddressMap = constructSameAddressMap(UNI_ROUTER)

export const V2_SUSHI_ROUTER_ADDRESS: AddressMap = constructSameAddressMap(SUSHI_ROUTER)
export const V2_SUSHI_FACTORY_ADDRESSES: AddressMap = constructSameAddressMap(V2_SUSHI_FACTORY_ADDRESS)

// Polygon Mainnet

export const UNKNOWN_LOGO = 'https://raw.githubusercontent.com/sushiswap/icons/master/token/unknown.png'

export const VERSE_ROUTER_ETH: AddressMap = constructSameAddressMap('0xB4B0ea46Fe0E9e8EAB4aFb765b527739F2718671')
export const VERSE_FACTORY_ETH: AddressMap = constructSameAddressMap('0xee3E9E46E34a27dC755a63e2849C9913Ee1A06E2')
export const VERSE_INIT_CODE_HASH_ETH = '0x0a50f77f76135087ca96e2f94d9220fd6c435aa345a8de958603cb89c476cc02'

export const SUSHI_ROUTER_ADDRESS_MAINNET: AddressMap = constructSameAddressMap(
  '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'
)
export const SUSHI_FACTORY_ADDRESSES_MAINNET: AddressMap = constructSameAddressMap(
  '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'
)
export const SUSHI_INIT_CODE_HASH_MAINNET = '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303'

export const QUICK_ROUTER_ADDRESS_MAINNET: AddressMap = constructSameAddressMap(
  '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff'
)

export const QUICK_FACTORY_ADDRESSES_MAINNET: AddressMap = constructSameAddressMap(
  '0x5757371414417b8c6caad45baef941abc7d3ab32'
)

export const QUICK_INIT_CODE_HASH = '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f'

export const POLYCAT_ROUTER_ADDRESS_MAINNET: AddressMap = constructSameAddressMap(
  '0x94930a328162957FF1dd48900aF67B5439336cBD'
)

export const POLYCAT_FACTORY_ADDRESSES_MAINNET: AddressMap = constructSameAddressMap(
  '0x477Ce834Ae6b7aB003cCe4BC4d8697763FF456FA'
)

export const POLYCAT_INIT_CODE_HASH = '0x3cad6f9e70e13835b4f07e5dd475f25a109450b22811d0437da51e66c161255a'

export const POLYDEX_ROUTER_ADDRESS_POLYGON: AddressMap = constructSameAddressMap(
  '0xC60aE14F2568b102F8Ca6266e8799112846DD088'
)

export const POLYDEX_FACTORY_ADDRESSES_POLYGON: AddressMap = constructSameAddressMap(
  '0xEAA98F7b5f7BfbcD1aF14D0efAa9d9e68D82f640'
)

export const POLYDEX_INIT_CODE_HASH = '0xf60eec85709051eb86026776e0ece6269f1ab16f3af55442e19958beb5239ae2'

export const APESWAP_ROUTER_ADDRESS_POLYGON: AddressMap = constructSameAddressMap(
  '0xC0788A3aD43d79aa53B09c2EaCc313A787d1d607'
)

export const APESWAP_FACTORY_ADDRESSES_POLYGON: AddressMap = constructSameAddressMap(
  '0xCf083Be4164828f00cAE704EC15a36D711491284'
)

export const APESWAP_INIT_CODE_HASH_POLYGON = '0x511f0f358fe530cda0859ec20becf391718fdf5a329be02f4c95361f3d6a42d8'

// Ethreum Mainnet
export const SUSHI_ROUTER_ADDRESS_ETH: AddressMap = constructSameAddressMap(
  '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F'
)
export const SUSHI_FACTORY_ADDRESSES_ETH: AddressMap = constructSameAddressMap(
  '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac'
)
export const SUSHI_INIT_CODE_HASH_ETH = '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303'

export const UNI_ROUTER_ADDRESS_ETH: AddressMap = constructSameAddressMap('0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D')

export const UNI_FACTORY_ADDRESSES_ETH: AddressMap = constructSameAddressMap(
  '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'
)

export const UNI_INIT_CODE_HASH_ETH = '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f'

export const KYBER_ROUTER_ADDRESS_ETH: AddressMap = constructSameAddressMap(
  '0x0000000000000000000000000000000000000000'
)

export const KYBER_FACTORY_ADDRESS_ETH: AddressMap = constructSameAddressMap(
  '0x0000000000000000000000000000000000000000'
)

export const KYBER_INIT_CODE_HASH_ETH = '0x0000000000000000000000000000000000000000000000000000000000000000'

export const SHIBA_ROUTER_ADDRESS_ETH: AddressMap = constructSameAddressMap(
  '0x03f7724180AA6b939894B5Ca4314783B0b36b329'
)

export const SHIBA_FACTORY_ADDRESS_ETH: AddressMap = constructSameAddressMap(
  '0x115934131916C8b277DD010Ee02de363c09d037c'
)

export const SHIBA_INIT_CODE_HASH_ETH = '0x65d1a3b1e46c6e4f1be1ad5f99ef14dc488ae0549dc97db9b30afe2241ce1c7a'

// BSC Mainnet

export const PANCAKE_ROUTER_ADDRESS_BSC: AddressMap = constructSameAddressMap(
  '0x10ED43C718714eb63d5aA57B78B54704E256024E'
)

export const PANCAKE_FACTORY_ADDRESS_BSC: AddressMap = constructSameAddressMap(
  '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73'
)

export const PANCAKE_INIT_CODE_HASH_BSC = '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5'

export const BISWAP_ROUTER_ADDRESS_BSC: AddressMap = constructSameAddressMap(
  '0x3a6d8cA21D1CF76F653A67577FA0D27453350dD8'
)

export const BISWAP_FACTORY_ADDRESS_BSC: AddressMap = constructSameAddressMap(
  '0x858E3312ed3A876947EA49d572A7C42DE08af7EE'
)

export const BISWAP_INIT_CODE_HASH_BSC = '0xfea293c909d87cd4153593f077b76bb7e94340200f4ee84211ae8e4f9bd7ffdf'

export const APESWAP_ROUTER_ADDRESS_BSC: AddressMap = constructSameAddressMap(
  '0xcF0feBd3f17CEf5b47b0cD257aCf6025c5BFf3b7'
)

export const APESWAP_FACTORY_ADDRESS_BSC: AddressMap = constructSameAddressMap(
  '0x0841BD0B734E4F5853f0dD8d7Ea041c241fb0Da6'
)

export const APESWAP_INIT_CODE_HASH_BSC = '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b'

export const SUSHISWAP_ROUTER_ADDRESS_BSC: AddressMap = constructSameAddressMap(
  '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'
)

export const SUSHISWAP_FACTORY_ADDRESS_BSC: AddressMap = constructSameAddressMap(
  '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'
)

export const SUSHISWAP_INIT_CODE_HASH_BSC = '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303'

export const BABYSWAP_ROUTER_ADDRESS_BSC: AddressMap = constructSameAddressMap(
  '0x325E343f1dE602396E256B67eFd1F61C3A6B38Bd'
)

export const BABYSWAP_FACTORY_ADDRESS_BSC: AddressMap = constructSameAddressMap(
  '0x86407bEa2078ea5f5EB5A52B2caA963bC1F889Da'
)

export const BABYSWAP_INIT_CODE_HASH_BSC = '0x48c8bec5512d397a5d512fbb7d83d515e7b6d91e9838730bd1aa1b16575da7f5'

export const SUSHI_ROUTER_ADDRESS_AVAX: AddressMap = constructSameAddressMap(
  '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'
)

export const SUSHI_FACTORY_ADDRESS_AVAX: AddressMap = constructSameAddressMap(
  '0xc35dadb65012ec5796536bd9864ed8773abc74c4'
)

export const SUSHI_INIT_CODE_HASH_AVAX = '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303'

export const TRADERJOE_ROUTER_ADDRESS_AVAX: AddressMap = constructSameAddressMap(
  '0x60aE616a2155Ee3d9A68541Ba4544862310933d4'
)

export const TRADERJOE_FACTORY_ADDRESS_AVAX: AddressMap = constructSameAddressMap(
  '0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10'
)

export const TRADERJOE_INIT_CODE_HASH_AVAX = '0x0bbca9af0511ad1a1da383135cf3a8d2ac620e549ef9f6ae3a4c33c2fed0af91'

export const TRADERJOE_ROUTER_ADDRESS_FUJI: AddressMap = constructSameAddressMap(
  '0x1E58825113886D1F2B32cB3a83c3294D620F2a89'
)

export const TRADERJOE_FACTORY_ADDRESS_FUJI: AddressMap = constructSameAddressMap(
  '0x9274dAC997ca1b6D82a57388cca05749EeaD4581'
)

export const TRADERJOE_INIT_CODE_HASH_FUJI = '0x92f9b14ebc5e89b29771bf9ef4ea0ef19b7c17e4ec24e69a87ab6e120eacc3cb'

export const PANGOLIN_ROUTER_ADDRESS_AVAX: AddressMap = constructSameAddressMap(
  '0xE54Ca86531e17Ef3616d22Ca28b0D458b6C89106'
)

export const PANGOLIN_FACTORY_ADDRESS_AVAX: AddressMap = constructSameAddressMap(
  '0xefa94DE7a4656D787667C749f7E1223D71E9FD88'
)

export const PANGOLIN_INIT_CODE_HASH_AVAX = '0x40231f6b438bce0797c9ada29b718a87ea0a5cea3fe9a771abdd76bd41a3e545'

export const SUSHI_ROUTER_ADDRESS_ARBITRUM: AddressMap = constructSameAddressMap(
  '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'
)

export const SUSHI_FACTORY_ADDRESS_ARBITRUM: AddressMap = constructSameAddressMap(
  '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'
)

export const SUSHI_INIT_CODE_HASH_ARBITRUM = '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303'

export const SWAPR_ROUTER_ADDRESS_ARBITRUM: AddressMap = constructSameAddressMap(
  '0x530476d5583724A89c8841eB6Da76E7Af4C0F17E'
)

export const SWAPR_FACTORY_ADDRESS_ARBITRUM: AddressMap = constructSameAddressMap(
  '0x359F20Ad0F42D75a5077e65F30274cABe6f4F01a'
)

export const SWAPR_INIT_CODE_HASH_ARBITRUM = '0xd306a548755b9295ee49cc729e13ca4a45e00199bbd890fa146da43a50571776'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
export const HASH_ZERO = '0x0000000000000000000000000000000000000000000000000000000000000000'

export const CHAIN_SWAP_NAMES: ChainSwapName = {
  [SupportedChainId.MAINNET]: [UNI_SWAP, SUSHI_SWAP, VERSE_SWAP],
  [SupportedChainId.POLYGON_MAINET]: [UNI_SWAP, SUSHI_SWAP, QUICK_SWAP, APE_SWAP, POLYCAT, POLYDEX],
  [SupportedChainId.BSC_MAINNET]: [SUSHI_SWAP, PANCAKE_SWAP, BI_SWAP, APE_SWAP, BABY_SWAP],
  [SupportedChainId.POLYGON_TESTNET]: [BACOOR_SWAP, SUSHI_SWAP, UNI_SWAP],
  [SupportedChainId.AVALANCHE]: [SUSHI_SWAP, TRADER_JOE, PANGOLIN],
  [SupportedChainId.AVALANCHE_TESTNET]: [SUSHI_SWAP, TRADER_JOE],
  [SupportedChainId.ARBITRUM_ONE]: [UNI_SWAP, SUSHI_SWAP, SWAPR],
  [SupportedChainId.ARBITRUM_RINKEBY]: [SUSHI_SWAP],
  [SupportedChainId.OPTIMISM]: [UNI_SWAP],
}

export const LOGO: { [key: string]: string } = {
  [UNI_SWAP]: uniswapLogoUrl,
  [SUSHI_SWAP]: sushiswapLogoUrl,
  [KYBER_SWAP]: kyberswapLogoUrl,
  [SHIBA_SWAP]: shibaswapLogoUrl,
  [QUICK_SWAP]: quickswapLogoUrl,
  [POLYCAT]: polycatLogoUrl,
  [POLYDEX]: polydexLogoUrl,
  [BI_SWAP]: biswapLogoUrl,
  [PANCAKE_SWAP]: pancakeswapLogoUrl,
  [APE_SWAP]: apeswapLogoUrl,
  [BABY_SWAP]: babyswapLogoUrl,
  [TRADER_JOE]: traderjoeLogoUrl,
  [PANGOLIN]: pangolinLogoUrl,
  [SWAPR]: swapRLogoUrl,
  [VERSE_SWAP]: verseLogoUrl,
}

export const CHAIN_SWAP_MAP: ChainSwapMap = {
  [SupportedChainId.MAINNET]: {
    [UNI_SWAP]: {
      factoryAddresses: UNI_FACTORY_ADDRESSES_ETH,
      initCodeHash: UNI_INIT_CODE_HASH_ETH,
      routerAddress: UNI_ROUTER_ADDRESS_ETH,
    },
    [SUSHI_SWAP]: {
      factoryAddresses: SUSHI_FACTORY_ADDRESSES_ETH,
      initCodeHash: SUSHI_INIT_CODE_HASH_ETH,
      routerAddress: SUSHI_ROUTER_ADDRESS_ETH,
    },
    [SHIBA_SWAP]: {
      factoryAddresses: SHIBA_FACTORY_ADDRESS_ETH,
      initCodeHash: SHIBA_INIT_CODE_HASH_ETH,
      routerAddress: SHIBA_ROUTER_ADDRESS_ETH,
    },
    [VERSE_SWAP]: {
      factoryAddresses: VERSE_FACTORY_ETH,
      initCodeHash: VERSE_INIT_CODE_HASH_ETH,
      routerAddress: VERSE_ROUTER_ETH,
    },
  },
  [SupportedChainId.POLYGON_TESTNET]: {
    [BACOOR_SWAP]: {
      factoryAddresses: V2_FACTORY_ADDRESSES,
      initCodeHash: BACOOR_INIT_CONDE_HASH,
      routerAddress: V2_ROUTER_ADDRESS,
    },
    [UNI_SWAP]: {
      factoryAddresses: V2_UNI_FACTORY_ADDRESSES,
      initCodeHash: UNI_INIT_CODE_HASH,
      routerAddress: V2_UNI_ROUTER_ADDRESS,
    },
    [SUSHI_SWAP]: {
      factoryAddresses: V2_SUSHI_FACTORY_ADDRESSES,
      initCodeHash: SUSHI_INIT_CODE_HASH[ChainId.MATIC_TESTNET],
      routerAddress: V2_SUSHI_ROUTER_ADDRESS,
    },
  },
  [SupportedChainId.POLYGON_MAINET]: {
    [UNI_SWAP]: {
      factoryAddresses: UNI_FACTORY_ADDRESSES_ETH,
      initCodeHash: UNI_INIT_CODE_HASH_ETH,
      routerAddress: UNI_ROUTER_ADDRESS_ETH,
    },
    [SUSHI_SWAP]: {
      factoryAddresses: SUSHI_FACTORY_ADDRESSES_MAINNET,
      initCodeHash: SUSHI_INIT_CODE_HASH_MAINNET,
      routerAddress: SUSHI_ROUTER_ADDRESS_MAINNET,
    },
    [QUICK_SWAP]: {
      factoryAddresses: QUICK_FACTORY_ADDRESSES_MAINNET,
      initCodeHash: QUICK_INIT_CODE_HASH,
      routerAddress: QUICK_ROUTER_ADDRESS_MAINNET,
    },
    [APE_SWAP]: {
      factoryAddresses: APESWAP_FACTORY_ADDRESSES_POLYGON,
      initCodeHash: APESWAP_INIT_CODE_HASH_POLYGON,
      routerAddress: APESWAP_ROUTER_ADDRESS_POLYGON,
    },
    [POLYCAT]: {
      factoryAddresses: POLYCAT_FACTORY_ADDRESSES_MAINNET,
      initCodeHash: POLYCAT_INIT_CODE_HASH,
      routerAddress: POLYCAT_ROUTER_ADDRESS_MAINNET,
    },
    [POLYDEX]: {
      factoryAddresses: POLYDEX_FACTORY_ADDRESSES_POLYGON,
      initCodeHash: POLYDEX_INIT_CODE_HASH,
      routerAddress: POLYDEX_ROUTER_ADDRESS_POLYGON,
    },
  },
  [SupportedChainId.BSC_MAINNET]: {
    [PANCAKE_SWAP]: {
      factoryAddresses: PANCAKE_FACTORY_ADDRESS_BSC,
      initCodeHash: PANCAKE_INIT_CODE_HASH_BSC,
      routerAddress: PANCAKE_ROUTER_ADDRESS_BSC,
    },
    [BI_SWAP]: {
      factoryAddresses: BISWAP_FACTORY_ADDRESS_BSC,
      initCodeHash: BISWAP_INIT_CODE_HASH_BSC,
      routerAddress: BISWAP_ROUTER_ADDRESS_BSC,
    },
    [APE_SWAP]: {
      factoryAddresses: APESWAP_FACTORY_ADDRESS_BSC,
      initCodeHash: APESWAP_INIT_CODE_HASH_BSC,
      routerAddress: APESWAP_ROUTER_ADDRESS_BSC,
    },
    [SUSHI_SWAP]: {
      factoryAddresses: SUSHISWAP_FACTORY_ADDRESS_BSC,
      initCodeHash: SUSHISWAP_INIT_CODE_HASH_BSC,
      routerAddress: SUSHISWAP_ROUTER_ADDRESS_BSC,
    },
    [BABY_SWAP]: {
      factoryAddresses: BABYSWAP_FACTORY_ADDRESS_BSC,
      initCodeHash: BABYSWAP_INIT_CODE_HASH_BSC,
      routerAddress: BABYSWAP_ROUTER_ADDRESS_BSC,
    },
  },
  [SupportedChainId.AVALANCHE]: {
    [SUSHI_SWAP]: {
      factoryAddresses: SUSHI_FACTORY_ADDRESS_AVAX,
      initCodeHash: SUSHI_INIT_CODE_HASH_AVAX,
      routerAddress: SUSHI_ROUTER_ADDRESS_AVAX,
    },
    [TRADER_JOE]: {
      factoryAddresses: TRADERJOE_FACTORY_ADDRESS_AVAX,
      initCodeHash: TRADERJOE_INIT_CODE_HASH_AVAX,
      routerAddress: TRADERJOE_ROUTER_ADDRESS_AVAX,
    },
    [PANGOLIN]: {
      factoryAddresses: PANGOLIN_FACTORY_ADDRESS_AVAX,
      initCodeHash: PANGOLIN_INIT_CODE_HASH_AVAX,
      routerAddress: PANGOLIN_ROUTER_ADDRESS_AVAX,
    },
  },
  [SupportedChainId.AVALANCHE_TESTNET]: {
    [SUSHI_SWAP]: {
      factoryAddresses: V2_SUSHI_FACTORY_ADDRESSES,
      initCodeHash: SUSHI_INIT_CODE_HASH[ChainId.MATIC_TESTNET],
      routerAddress: V2_SUSHI_ROUTER_ADDRESS,
    },
    [TRADER_JOE]: {
      factoryAddresses: TRADERJOE_FACTORY_ADDRESS_FUJI,
      initCodeHash: TRADERJOE_INIT_CODE_HASH_FUJI,
      routerAddress: TRADERJOE_ROUTER_ADDRESS_FUJI,
    },
  },
  [SupportedChainId.ARBITRUM_ONE]: {
    [SUSHI_SWAP]: {
      factoryAddresses: SUSHI_FACTORY_ADDRESS_ARBITRUM,
      initCodeHash: SUSHI_INIT_CODE_HASH_ARBITRUM,
      routerAddress: SUSHI_ROUTER_ADDRESS_ARBITRUM,
    },
    [UNI_SWAP]: {
      factoryAddresses: UNI_FACTORY_ADDRESSES_ETH,
      initCodeHash: UNI_INIT_CODE_HASH_ETH,
      routerAddress: UNI_ROUTER_ADDRESS_ETH,
    },
    [SWAPR]: {
      factoryAddresses: SWAPR_FACTORY_ADDRESS_ARBITRUM,
      initCodeHash: SWAPR_INIT_CODE_HASH_ARBITRUM,
      routerAddress: SWAPR_ROUTER_ADDRESS_ARBITRUM,
    },
  },
  [SupportedChainId.OPTIMISM]: {
    [SUSHI_SWAP]: {
      factoryAddresses: SUSHI_FACTORY_ADDRESS_ARBITRUM,
      initCodeHash: SUSHI_INIT_CODE_HASH_ARBITRUM,
      routerAddress: SUSHI_ROUTER_ADDRESS_ARBITRUM,
    },
    [UNI_SWAP]: {
      factoryAddresses: UNI_FACTORY_ADDRESSES_ETH,
      initCodeHash: UNI_INIT_CODE_HASH_ETH,
      routerAddress: UNI_ROUTER_ADDRESS_ETH,
    },
  },
}

/**
 * The oldest V0 governance address
 */
export const GOVERNANCE_ALPHA_V0_ADDRESSES: AddressMap = constructSameAddressMap(
  '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F'
)
/**
 * The older V1 governance address
 */
export const GOVERNANCE_ALPHA_V1_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0xC4e172459f1E7939D522503B81AFAaC1014CE6F6',
}
/**
 * The latest governor bravo that is currently admin of timelock
 */
export const GOVERNANCE_BRAVO_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x408ED6354d4973f66138C91495F2f2FCbd8724C3',
}

export const TIMELOCK_ADDRESS: AddressMap = constructSameAddressMap('0x1a9C8182C09F50C8318d769245beA52c32BE35BC')

export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0x090D4613473dEE047c3f2706764f49E0821D256e',
}
export const ARGENT_WALLET_DETECTOR_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8',
}
export const V3_CORE_FACTORY_ADDRESSES: AddressMap = constructSameAddressMap(V3_FACTORY_ADDRESS, [
  SupportedChainId.OPTIMISM,
  SupportedChainId.OPTIMISTIC_KOVAN,
  SupportedChainId.ARBITRUM_ONE,
  SupportedChainId.ARBITRUM_RINKEBY,
  SupportedChainId.POLYGON_MAINET,
])
export const QUOTER_ADDRESSES: AddressMap = constructSameAddressMap('0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6', [
  SupportedChainId.OPTIMISM,
  SupportedChainId.OPTIMISTIC_KOVAN,
  SupportedChainId.ARBITRUM_ONE,
  SupportedChainId.ARBITRUM_RINKEBY,
  SupportedChainId.POLYGON_MAINET,
])
export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = constructSameAddressMap(
  '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
  [
    SupportedChainId.OPTIMISM,
    SupportedChainId.OPTIMISTIC_KOVAN,
    SupportedChainId.ARBITRUM_ONE,
    SupportedChainId.ARBITRUM_RINKEBY,
    SupportedChainId.POLYGON_MAINET,
  ]
)
export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.ROPSTEN]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.GOERLI]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.RINKEBY]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
}
export const SOCKS_CONTROLLER_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x65770b5283117639760beA3F867b69b3697a91dd',
}
export const SWAP_ROUTER_ADDRESSES: AddressMap = constructSameAddressMap('0xE592427A0AEce92De3Edee1F18E0157C05861564', [
  SupportedChainId.POLYGON_MAINET,
  SupportedChainId.OPTIMISM,
  SupportedChainId.OPTIMISTIC_KOVAN,
  SupportedChainId.ARBITRUM_ONE,
  SupportedChainId.ARBITRUM_RINKEBY,
])
export const V3_MIGRATOR_ADDRESSES: AddressMap = constructSameAddressMap('0xA5644E29708357803b5A882D272c41cC0dF92B34', [
  SupportedChainId.ARBITRUM_ONE,
  SupportedChainId.ARBITRUM_RINKEBY,
  SupportedChainId.POLYGON_MAINET,
])
