import { ISocialMedia } from "./social";

export interface IAppState {
    selectedLabel: ArticleLabel;
    currencyList: ICurrencyOption[];
    articles: IArticle[];
    selectedArticle: IArticle | null;
    coinList: ICoin[];
    socialMedia: ISocialMedia[];
}

export interface ICoin {
    id: string;
    symbol: string;
    name: string;
    image: string;
    color?: string;
    price?: number;
}

export interface ICurrencyOption {
    id: string;
    currencyId: string;
    visible: boolean;
}

export enum ArticleLabel {
    All = "all",
    Positive = "Positive",
    Negative = "Negative",
    Neutral = "Neutral"
}

export interface IArticle {
    relatedCurrency?: ICoin;
    url: string;
    source?: string;
    title: string;
    description?: string;
    explain: string;
    summary: string;
    publishedTime: string;
    author?: string;
    image: string;
    label: ArticleLabel;
    keywords: string[];
}

export interface IGetArticleListParams {
    label: ArticleLabel;
}