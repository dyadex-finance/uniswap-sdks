import { ChainId, SUPPORTED_CHAINS, SupportedChainsType } from './chains'

type AddressMap = { [chainId: number]: string }

type ChainAddresses = {
  v3CoreFactoryAddress: string
  multicallAddress: string
  quoterAddress: string
  v3MigratorAddress?: string
  nonfungiblePositionManagerAddress?: string
  tickLensAddress?: string
  swapRouter02Address?: string
  mixedRouteQuoterV1Address?: string
  mixedRouteQuoterV2Address?: string

  // v4
  v4PoolManagerAddress?: string
  v4PositionManagerAddress?: string
  v4StateView?: string
  v4QuoterAddress?: string
}

const DEFAULT_NETWORKS = [ChainId.MONAD, ChainId.MONAD_TESTNET]

function constructSameAddressMap(address: string, additionalNetworks: ChainId[] = []): AddressMap {
  return DEFAULT_NETWORKS.concat(additionalNetworks).reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = address
    return memo
  }, {})
}

export const UNI_ADDRESSES: AddressMap = constructSameAddressMap('0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', [])

export const UNISWAP_NFT_AIRDROP_CLAIM_ADDRESS = '0x8B799381ac40b838BBA4131ffB26197C432AFe78'

/**
 * @deprecated use V2_FACTORY_ADDRESSES instead
 */
export const V2_FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'
export const V2_FACTORY_ADDRESSES: AddressMap = {
  [ChainId.MONAD_TESTNET]: '0x733e88f248b742db6c14c0b1713af5ad7fdd59d0',
  [ChainId.MONAD]: '0x182a927119d56008d921126764bf884221b10f59',
}
/**
 * @deprecated use V2_ROUTER_ADDRESSES instead
 */
export const V2_ROUTER_ADDRESS = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'
export const V2_ROUTER_ADDRESSES: AddressMap = {
  [ChainId.MONAD_TESTNET]: '0xfb8e1c3b833f9e67a71c859a132cf783b645e436',
  [ChainId.MONAD]: '0x4b2ab38dbf28d31d467aa8993f6c2585981d6804',
}

const MONAD_TESTNET_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xEfcC32c7A2f9b72B76bE134C78d4Bfb1Db49A6C8',
  multicallAddress: '0x3d3eCbBd53D2792fc1ED74AdDa7697a9eC2D5ba3',
  quoterAddress: '0x354Ccc9ee9A2d42398cd5e57751a5Ec6Df8fC559',
  v3MigratorAddress: '0x54a1C22D1772B005F1F34D3f260b6D2538517730',
  nonfungiblePositionManagerAddress: '0x1173d3d22f317d6Dd6F0e1E3d92F74AEB989FE1A',
  tickLensAddress: '0x4780f1c10aa9D717D8914fef9324dE174c3AaA06',
  swapRouter02Address: '0x1235e086bE535a7CdF79e28afd06b735BA3b64DC',
  // TODO: Update v4 addresses for testnet once they are deployed
  v4PoolManagerAddress: '0x188d586ddcf52439676ca21a244753fa19f9ea8e',
  v4PositionManagerAddress: '0x5b7ec4a94ff9bedb700fb82ab09d5846972f4016',
  v4StateView: '0x77395f3b2e73ae90843717371294fa97cc419d64',
  v4QuoterAddress: '0xa222dd357a9076d1091ed6aa2e16c9742dd26891',
}

// TODO: Update mainnet addresses once they are deployed
const MONAD_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x204faca1764b154221e35c0d20abb3c525710498',
  multicallAddress: '0xd1b797d92d87b688193a2b976efc8d577d204343',
  quoterAddress: '0x2d01411773c8c24805306e89a41f7855c3c4fe65',
  v3MigratorAddress: '0x7078c4537c04c2b2e52ddba06074dbdacf23ca15',
  nonfungiblePositionManagerAddress: '0x7197e214c0b767cfb76fb734ab638e2c192f4e53',
  tickLensAddress: '0xf025e0fe9e331a0ef05c2ad3c4e9c64b625cda6f',
  swapRouter02Address: '0xfe31f71c1b106eac32f1a19239c9a9a72ddfb900',
  // v4
  v4PoolManagerAddress: '0x188d586ddcf52439676ca21a244753fa19f9ea8e',
  v4PositionManagerAddress: '0x5b7ec4a94ff9bedb700fb82ab09d5846972f4016',
  v4StateView: '0x77395f3b2e73ae90843717371294fa97cc419d64',
  v4QuoterAddress: '0xa222dd357a9076d1091ed6aa2e16c9742dd26891',
}

export const CHAIN_TO_ADDRESSES_MAP: Record<SupportedChainsType, ChainAddresses> = {
  [ChainId.MONAD_TESTNET]: MONAD_TESTNET_ADDRESSES,
  [ChainId.MONAD]: MONAD_ADDRESSES,
}

/* V3 Contract Addresses */
export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].v3CoreFactoryAddress
    return memo
  }, {}),
}

export const V3_MIGRATOR_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const v3MigratorAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v3MigratorAddress
    if (v3MigratorAddress) {
      memo[chainId] = v3MigratorAddress
    }
    return memo
  }, {}),
}

export const MULTICALL_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].multicallAddress
    return memo
  }, {}),
}

/**
 * The oldest V0 governance address
 */
export const GOVERNANCE_ALPHA_V0_ADDRESSES: AddressMap = constructSameAddressMap(
  '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F',
)
/**
 * The older V1 governance address
 */
export const GOVERNANCE_ALPHA_V1_ADDRESSES: AddressMap = {
  [ChainId.MONAD]: '0xC4e172459f1E7939D522503B81AFAaC1014CE6F6',
}
/**
 * The latest governor bravo that is currently admin of timelock
 */
export const GOVERNANCE_BRAVO_ADDRESSES: AddressMap = {
  [ChainId.MONAD]: '0x408ED6354d4973f66138C91495F2f2FCbd8724C3',
}

export const TIMELOCK_ADDRESSES: AddressMap = constructSameAddressMap('0x1a9C8182C09F50C8318d769245beA52c32BE35BC')

export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
  [ChainId.MONAD]: '0x090D4613473dEE047c3f2706764f49E0821D256e',
}

export const ARGENT_WALLET_DETECTOR_ADDRESS: AddressMap = {
  [ChainId.MONAD]: '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8',
}

export const QUOTER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].quoterAddress
    return memo
  }, {}),
}

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const nonfungiblePositionManagerAddress = CHAIN_TO_ADDRESSES_MAP[chainId].nonfungiblePositionManagerAddress
    if (nonfungiblePositionManagerAddress) {
      memo[chainId] = nonfungiblePositionManagerAddress
    }
    return memo
  }, {}),
}

export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'),
}

export const SOCKS_CONTROLLER_ADDRESSES: AddressMap = {
  [ChainId.MONAD]: '0x65770b5283117639760beA3F867b69b3697a91dd',
}

export const TICK_LENS_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const tickLensAddress = CHAIN_TO_ADDRESSES_MAP[chainId].tickLensAddress
    if (tickLensAddress) {
      memo[chainId] = tickLensAddress
    }
    return memo
  }, {}),
}

export const MIXED_ROUTE_QUOTER_V1_ADDRESSES: AddressMap = SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
  const mixedRouteQuoterV1Address = CHAIN_TO_ADDRESSES_MAP[chainId].mixedRouteQuoterV1Address
  if (mixedRouteQuoterV1Address) {
    memo[chainId] = mixedRouteQuoterV1Address
  }
  return memo
}, {})

export const SWAP_ROUTER_02_ADDRESSES = (chainId: number) => {
  if (SUPPORTED_CHAINS.includes(chainId)) {
    const id = chainId as SupportedChainsType
    return CHAIN_TO_ADDRESSES_MAP[id].swapRouter02Address ?? '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45'
  }
  return ''
}
