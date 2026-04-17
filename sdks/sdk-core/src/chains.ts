// Supported chain IDs for Uniswap deployments
export enum ChainId {
  MONAD_TESTNET = 10143,
  MONAD = 143,
}

export const SUPPORTED_CHAINS = [ChainId.MONAD_TESTNET, ChainId.MONAD] as const
export type SupportedChainsType = (typeof SUPPORTED_CHAINS)[number]

export enum NativeCurrencyName {
  // Strings match input for CLI
  ETHER = 'ETH',
  MATIC = 'MATIC',
  CELO = 'CELO',
  GNOSIS = 'XDAI',
  MOONBEAM = 'GLMR',
  BNB = 'BNB',
  AVAX = 'AVAX',
  ROOTSTOCK = 'RBTC',
}
