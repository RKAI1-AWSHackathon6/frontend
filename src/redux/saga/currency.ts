import { CurrencyApiService } from "@/service/currency";
import { ICurrencyResponse, IFavoriteCurrencyResponse } from "@/service/interface/currency";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { actAddCoin, actGetArticleList, actRemoveCoin, actSetCoinList, actSetFavoriteCoinList, actUpdateCoin } from "../action";
import { ADD_NEW_COIN_REQUEST, GET_ALL_COINS_REQUEST as GET_ALL_CURRENCIES_REQUEST, GET_FAVORITE_COINS_REQUEST, REMOVE_COIN_REQUEST, UPDATE_COIN_REQUEST } from "../constants";
import { ArticleLabel, ICoin, ICurrencyOption } from "../interface";


function *getAllCurrency()
{
	try 
	{
		const currencyRes: ICurrencyResponse[] = yield call(CurrencyApiService.getList);

        const coinList: ICoin[] = currencyRes.map(currency => {
            return {
                id: currency.id,
                name: currency.name,
                symbol: currency.symbol,
                image: currency.icon
            }
        })

		yield put(actSetCoinList(coinList));

	}
	catch (e)
	{
		// yield put(actSetError("Failed to load project information"));
	}
}

function *getFavoriteCurrency()
{
	try 
	{
		const currencyRes: IFavoriteCurrencyResponse[] = yield call(CurrencyApiService.getFavoriteList);

        const currencyListt: ICurrencyOption[] = currencyRes.map(currency => {
            return {
                id: currency.id,
                currencyId: currency.favourite_id,
                visible: currency.visible
            }
        })

		yield put(actSetFavoriteCoinList(currencyListt));

	}
	catch (e)
	{
		// yield put(actSetError("Failed to load project information"));
	}
}

type AddFavoriteCurrencyParams = { payload: string, type: string };

function *addFavoriteCurrency({payload}: AddFavoriteCurrencyParams)
{
    const currencyId = payload;
	try 
	{
		const currencyOption: {data: IFavoriteCurrencyResponse} = yield call(CurrencyApiService.createFavorite, currencyId, true);
		yield put(actAddCoin({
            id: currencyOption.data.id,
            currencyId: currencyOption.data.favourite_id,
            visible: currencyOption.data.visible
        }));
	}
	catch (e)
	{
		// yield put(actSetError("Failed to load project information"));
	}
}

type RemoveFavoriteCurrencyParams = { payload: string, type: string };

function *removeFavoriteCurrency({payload}: RemoveFavoriteCurrencyParams)
{
	try 
	{
		yield call(CurrencyApiService.deleteFavorite, payload);

		yield put(actRemoveCoin(payload));

	}
	catch (e)
	{
		// yield put(actSetError("Failed to load project information"));
	}
}

type UpdateFavoriteCurrencyParams = { payload: ICurrencyOption, type: string };

function *updateFavoriteCurrency({payload}: UpdateFavoriteCurrencyParams)
{
	try 
	{
		yield call(
            CurrencyApiService.updateFavorite, 
            payload.id,
            payload.currencyId,
            payload.visible
        );

		yield put(actUpdateCoin(payload));
        const label: ArticleLabel = yield select((state) => state.App.selectedLabel);
        yield put(actGetArticleList({
            label
        }));

	}
	catch (e)
	{
		// yield put(actSetError("Failed to load project information"));
	}
}

function *currencySaga() 
{
	yield takeLatest(GET_ALL_CURRENCIES_REQUEST, getAllCurrency);
    yield takeLatest(GET_FAVORITE_COINS_REQUEST, getFavoriteCurrency);
    yield takeLatest(ADD_NEW_COIN_REQUEST, addFavoriteCurrency);
    yield takeLatest(REMOVE_COIN_REQUEST, removeFavoriteCurrency);
    yield takeLatest(UPDATE_COIN_REQUEST, updateFavoriteCurrency);
}

export default currencySaga;
