import { ArticleLabel, IGetArticleListParams } from "@/redux/interface";

export interface ITabProps {
    selectedLabel: ArticleLabel;
    actGetArticleList: (payload: IGetArticleListParams) => void;
    actSetSelectedLabel: (payload: ArticleLabel) => void;
}