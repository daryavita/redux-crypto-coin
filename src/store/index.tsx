import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { coingeckoApi } from "./api/coingecko.api";
import { coingeckoReducer } from "./api/coingecko.slice";

export const store = configureStore({
    reducer: {   
        [coingeckoApi.reducerPath]: coingeckoApi.reducer,
        coingecko: coingeckoReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coingeckoApi.middleware)
})

setupListeners(store.dispatch)

export type  RootState = ReturnType<typeof store.getState>