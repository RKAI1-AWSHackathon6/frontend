import { IArticle } from "@/redux/interface";

export interface IArticleItemProps {
    article: IArticle;
    actSelectArticle: (article: IArticle | null) => void;
}