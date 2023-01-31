import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CoinData } from "../../models/coinDataModels";


const initialState = {
    favourites: JSON.parse(localStorage.getItem('fav') ?? '[]'),
}

export const coingeckoSlice = createSlice({
    name: 'coingecko',
    initialState,
    reducers: {
        addFavourite(state, action: PayloadAction<CoinData>) {
            state.favourites.push(action.payload)
            localStorage.setItem('fav', JSON.stringify(state.favourites))
        },
        removeFavourite(state, action: PayloadAction<CoinData>) {
            state.favourites = state.favourites.filter((f: CoinData) => f.id !== action.payload.id)
            localStorage.setItem('fav', JSON.stringify(state.favourites))
        },
        resetFavourite(state) {
            state.favourites = []
            localStorage.removeItem('fav')
        },
    }
})

export const coingeckoActions = coingeckoSlice.actions
export const coingeckoReducer = coingeckoSlice.reducer