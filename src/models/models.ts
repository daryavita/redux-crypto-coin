import { ActionMeta, SingleValue } from "react-select";

export interface Coin {
    id: string;
    name: string;
    api_symbol: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string;
    large: string;
}

export interface Exchange {
    id: string;
    name: string;
    market_type: string;
    thumb: string;
    large: string;
}

export interface Category {
    id: number;
    name: string;
}

export interface ServerResponse {
    coins: Coin[];
    exchanges: Exchange[];
    icos: any[];
    categories: Category[];
    nfts: any[];
}

export interface CoinFavState {
    favourites: string[]
}

export interface MarketData {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply?: number;
    ath: number;
    ath_change_percentage: number;
    ath_date: Date;
    atl: number;
    atl_change_percentage: number;
    atl_date: Date;
    roi: null;
    last_updated: Date;
}

export type options = {
    value: string,
    label: string
}

export interface CurrencyRowProp {
    amountValue: number;
    onChangeAmount(evt: { target: HTMLInputElement }): void;
    options: options[];
    currency: options;
    onChangeCurrency(newValue: SingleValue<options>, actionMeta: ActionMeta<options>): void;
    isError: boolean;
    isLoading: boolean;
}