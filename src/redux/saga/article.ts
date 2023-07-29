import { ArticleApiService } from "@/service/article";
import { IArticleResponse } from "@/service/interface/article";
import { sentimentToLabel } from "@/utils/article";
import { getTimeText } from "@/utils/time";
import { call, put, takeLatest } from "redux-saga/effects";
import { actSetArticleList } from "../action";
import { GET_ARTICLE_LIST_REQUEST } from "../constants";
import { IArticle, IGetArticleListParams } from "../interface";

type GetArticleListParams = { payload: IGetArticleListParams, type: string };

function *getArticleList({payload}: GetArticleListParams)
{
	try 
	{
		const articleRes: {data: IArticleResponse[]} = yield call(ArticleApiService.getListFilter, payload.label);

        const articleList: IArticle[] = articleRes.data.map(article => {
            return {
                id: article.id,
                title: article.title,
				image: article.thumbnail_image_link,
				label: sentimentToLabel(article.sentiment_id),
				url: article.origin_link,
				summary: article.body,
				description: article.description,
				explain: article.explain,
				keywords: article.tag.split(",").map(tag => tag.trim()),
				publishedTime: getTimeText(article.publish_date),
				relatedCurrency: article.favourites.length > 0 ? {
					name: article.favourites[0].name,
					id: article.favourites[0].id,
					image: article.favourites[0].icon,
					symbol: article.favourites[0].symbol
				} : undefined
            }
        });

		yield put(actSetArticleList(articleList));

	}
	catch (e)
	{
		console.log(e);
		yield put(actSetArticleList([]));
	}
}

function *articleSaga() 
{
	yield takeLatest(GET_ARTICLE_LIST_REQUEST, getArticleList);
}

export default articleSaga;
