export interface ICurrencyResponse {
    name: string;
    symbol: string;
    icon: string;
    rank: number;
    id: string;
}

export interface IFavoriteCurrencyResponse {
    favourite_id: string,
    visible: boolean,
    id: string
}