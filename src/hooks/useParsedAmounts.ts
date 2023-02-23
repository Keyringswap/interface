import { Trade as V2Trade } from '@keyringswap/v2-sdk'
import { Currency, CurrencyAmount, TradeType } from '@uniswap/sdk-core'
import { Trade as V3Trade } from '@uniswap/v3-sdk'
import { useMemo } from 'react'

import { Field } from '../state/swap/actions'

export const useParsedAmounts = (
  independentField: Field,
  parsedAmount: CurrencyAmount<Currency> | undefined,
  showWrap: boolean,
  trade: V2Trade<Currency, Currency, TradeType> | V3Trade<Currency, Currency, TradeType> | undefined
) => {
  return useMemo(
    () =>
      showWrap
        ? {
            [Field.INPUT]: parsedAmount,
            [Field.OUTPUT]: parsedAmount,
          }
        : {
            [Field.INPUT]: independentField === Field.INPUT ? parsedAmount : trade?.inputAmount,
            [Field.OUTPUT]: independentField === Field.OUTPUT ? parsedAmount : trade?.outputAmount,
          },
    [independentField, parsedAmount, showWrap, trade]
  )
}
