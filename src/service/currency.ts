import HttpApiService from '../api/httpcommon';

export class CurrencyService extends HttpApiService 
{
	getList = () => 
	{
		return this.get(`tokens`);
	};

    getFavoriteList = () =>
    {
        return this.get(`favourite`);
    }

    createFavorite = (favoriteId: string, visible: boolean) =>
    {
        return this.post(`favourite`, {
            favourite_id: favoriteId,
            visible
        });
    }

    updateFavorite = (id: string, favoriteId: string, visible: boolean) =>
    {
        return this.put(`favourite/${id}`, {
            favourite_id: favoriteId,
            visible
        })
    }

    deleteFavorite = (favoriteId: string) =>
    {
        return this.delete(`favourite`, favoriteId);
    }

}
export const CurrencyApiService = new CurrencyService();
