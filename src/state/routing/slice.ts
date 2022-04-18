import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SupportedChainId } from 'constants/chains'
import qs from 'qs'

import { GetQuoteResult } from './types'

export const routingApi = createApi({
  reducerPath: 'routingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://forwarduni.w3w.app/',
  }),
  endpoints: (build) => ({
    getQuote: build.query<
      GetQuoteResult,
      {
        tokenInAddress: string
        tokenInChainId: SupportedChainId
        tokenOutAddress: string
        tokenOutChainId: SupportedChainId
        amount: string
        type: 'exactIn' | 'exactOut'
        clientId: string
      }
    >({
      query: (args) => `quote?${qs.stringify(args)}`,
    }),
  }),
})

export const { useGetQuoteQuery } = routingApi
