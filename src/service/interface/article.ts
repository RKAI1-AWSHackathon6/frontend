import { ICurrencyResponse } from "./currency";

export interface IArticleResponse {
    sentiment_id: number;
    title: string;
    hint: string;
    body: string;
    explain: string;
    description: string;
    thumbnail_image_link: string;
    origin_link: string;
    publish_date: number;
    tag: string;
    id: string;
    favourites: ICurrencyResponse[];
}