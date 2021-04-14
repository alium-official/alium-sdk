import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 56,
  BSCTESTNET = 97,
  HECOMAINNET = 128,
  HECOTESTNET = 256,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT,
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP,
}

export const FACTORY_ADDRESS = {
  [ChainId.MAINNET]: '0xbEAC7e750728e865A3cb39D5ED6E3A3044ae4B98',
  [ChainId.BSCTESTNET]: '0x0Da3335f7F9B0f78c965046b8CF124a51548001E',
  [ChainId.HECOMAINNET]: '0x163668b3293EA61e6405eFB233abc905De1dcEF9',
  [ChainId.HECOTESTNET]: '0x45434b2c51D270BDa028c152DdDDBC1e71B7c199',
}

export const INIT_CODE_HASH = {
  [ChainId.MAINNET]: '0x25c1427c313ae5ef5f43f21b21e260f4e278e19616bb3c570e41c050d5b1202a',
  [ChainId.BSCTESTNET]: '0xa3613311aca267922aeb6751f2832294f511676a5828b307f1b58249a11ea33c',
  [ChainId.HECOMAINNET]: '0x25c1427c313ae5ef5f43f21b21e260f4e278e19616bb3c570e41c050d5b1202a',
  [ChainId.HECOTESTNET]: '0x26aeaa7c5cd0c5b4696efa6a748e93b2cfa3d3213a34d60caf9c3aa537fff8c2',
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _998 = JSBI.BigInt(998)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256',
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
}
