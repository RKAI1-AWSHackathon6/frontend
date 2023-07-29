import { ArticleLabel } from '@/redux/interface';
import HttpApiService from '../api/httpcommon';

export class ArticleService extends HttpApiService 
{
	getListFilter = (label: ArticleLabel) => 
	{
		let body = {};

		switch (label) {
			case ArticleLabel.Negative:
				body = {
					sentiment_id: 1
				}
				break;
			case ArticleLabel.Positive:
				body = {
					sentiment_id: 2
				}
				break;
			case ArticleLabel.Neutral:
				body = {
					sentiment_id: 3
				}
				break;
		}
		
		const res = this.post(`headlines/filter`, body);
		return res;
	};
}
export const ArticleApiService = new ArticleService();
