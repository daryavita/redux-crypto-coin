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