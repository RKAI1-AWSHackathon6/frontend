import { GET_ARTICLE_LIST_REQUEST, SELECT_ARTICLE, SET_ARTICLE_LIST, SET_SELECTED_LABEL } from "../constants";
import { ArticleLabel, IArticle, IGetArticleListParams } from "../interface";

export function actSelectArticle(payload: IArticle | null) {
    return {
        type: SELECT_ARTICLE,
        payload
    }
}

export const actGetArticleList = (payload: IGetArticleListParams) =>
{
	return {
		type: GET_ARTICLE_LIST_REQUEST,
		payload
	}
}

export const actSetArticleList = (payload: IArticle[]) =>
{
	return {
		type: SET_ARTICLE_LIST,
		payload
	}
}

export const actSetSelectedLabel = (payload: ArticleLabel) =>
{
	return {
		type: SET_SELECTED_LABEL,
		payload
	}
}