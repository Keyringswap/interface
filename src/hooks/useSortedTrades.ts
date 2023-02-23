import { Trade as V2Trade } from '@keyringswap/v2-sdk'
import { Currency, CurrencyAmount, Percent, TradeType } from '@uniswap/sdk-core'
import { Trade as V3Trade } from '@uniswap/v3-sdk'
import { ReactNode, useMemo } from 'react'
import { V3TradeState } from 'state/routing/types'

import { LOGO, UNKNOWN_LOGO } from '../constants/addresses'
import { Field } from '../state/swap/actions'

export type TradeMap = {
  [name: string]: {
    trade: V2Trade<Currency, Currency, TradeType> | V3Trade<Currency, Currency, TradeType> | undefined
    v3TradeState: V3TradeState
    allowedSlippage: Percent
    currencyBalances: { [field in Field]?: CurrencyAmount<Currency> }
    parsedAmount: CurrencyAmount<Currency> | undefined
    currencies: { [field in Field]?: Currency | null }
    swapInputError: ReactNode
    name: string
  }
}

export const useSortedTrades = (showWrap: boolean, tradeMap: TradeMap) => {
  return useMemo(
    () =>
      Object.values(tradeMap)
        .sort((a, b) => {
          if (showWrap) {
            return 0
          } else {
            const amountA = Number(a?.trade?.outputAmount?.toSignificant(6) ?? '')
            const amountB = Number(b?.trade?.outputAmount?.toSignificant(6) ?? '')
            return amountB - amountA
          }
        })
        .map((item) => ({
          name: item.name,
          logo: LOGO[item.name] ?? UNKNOWN_LOGO,
          amountOut: showWrap ? item.parsedAmount?.toExact() ?? '' : item?.trade?.outputAmount?.toSignificant(6) ?? '',
        })),
    [showWrap, tradeMap]
  )
}
