import { Token } from './token'
import { ChainId } from '../chains'

/**
 * Known WETH9 implementation addresses, used in our implementation of Ether#wrapped
 */
export const WETH9: { [chainId: number]: Token } = {
  [ChainId.MONAD]: new Token(10143, '0x760AfE86e5de5fa0Ee542fc7B7B713e1c5425701', 18, 'WMON', 'Wrapped Monad'),
  [ChainId.MONAD_TESTNET]: new Token(143, '0x3bd359C1119dA7Da1D913D1C4D2B7c461115433A', 18, 'WMON', 'Wrapped Monad'),
}
