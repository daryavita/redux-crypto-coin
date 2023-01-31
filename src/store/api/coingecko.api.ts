import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ResponseCoinData } from '../../models/coinDataModels'
import { ServerResponse } from '../../models/models'
import { Coins } from '../../models/trendingCoinsModels'

export const coingeckoApi = createApi({
    reducerPath: 'coin/api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api/v3/' }),
    refetchOnFocus: true,
    endpoints: (builder) => ({
        searchCoins: builder.query({
            query: (query: string) => ({
                url: `search`,
                params: {
                    query: query,
                }
            }),
            transformResponse: (res: ServerResponse) => res.coins
        }),
        getCoinData: builder.query({
            query: (coinsId: string) => ({
                url: `coins/${coinsId}`,
                params: {
                    id: coinsId,
                    localization: false,
                    tickers: false,
                    community_data: false,
                    developer_data: false,
                    sparkline: false
                }
            }),
            transformResponse: (res: ResponseCoinData) => {
                return {
                    id: res.id,
                    name: res.name,
                    logo: res.image.small,
                    description: res.description.en,
                    currentPrice: res.market_data.current_price.usd,
                }
            }
        }),
        getTrendingCoins: builder.query<Coins[], void>({
            query: () => ({
                url: `search/trending`,
            }),
            transformResponse: (res: { coins: Coins[] } ) => res.coins
        }),
    })
})

export const { useSearchCoinsQuery, useLazySearchCoinsQuery, useLazyGetCoinDataQuery, useGetCoinDataQuery, useGetTrendingCoinsQuery} = coingeckoApi