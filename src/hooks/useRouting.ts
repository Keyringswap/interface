import { Trade as V2Trade } from '@keyringswap/v2-sdk'
import { Currency, TradeType } from '@uniswap/sdk-core'
import { Trade as V3Trade } from '@uniswap/v3-sdk'
import { useMemo } from 'react'
import { V3TradeState } from 'state/routing/types'

export const useRouting = (
  trade: V2Trade<Currency, Currency, TradeType> | V3Trade<Currency, Currency, TradeType> | undefined,
  v3TradeState: V3TradeState
) => {
  return useMemo(
    () => [
      trade instanceof V3Trade ? !trade?.swaps : !trade?.route,
      V3TradeState.LOADING === v3TradeState,
      V3TradeState.SYNCING === v3TradeState,
    ],
    [trade, v3TradeState]
  )
}
