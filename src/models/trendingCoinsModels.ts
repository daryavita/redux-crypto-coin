export interface ITrendingCoins {
    id: string;
    coin_id: number;
    name: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string;
    small: string;
    large: string;
    slug: string;
    price_btc: number;
    score: number;
}

export interface Coins {
    item: ITrendingCoins;
}

export interface ServerResTrendingCoins {
    coins: Coins[];
    exchanges: any[];
}