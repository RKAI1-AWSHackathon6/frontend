import { ADD_NEW_COIN, ADD_NEW_COIN_REQUEST, GET_ALL_COINS_REQUEST, GET_FAVORITE_COINS_REQUEST, REMOVE_COIN, REMOVE_COIN_REQUEST, SET_COIN_LIST, SET_FAVORITE_COIN_LIST, UPDATE_COIN, UPDATE_COIN_REQUEST } from "../constants";
import { ICoin, ICurrencyOption } from "../interface/app";

export const actAddCoin = (payload: ICurrencyOption) => 
{
	return {
		type : ADD_NEW_COIN,
		payload
	};
};

export const actRemoveCoin = (payload: string) => 
{
	return {
		type : REMOVE_COIN,
		payload
	};
};

export const actUpdateCoin = (payload: ICurrencyOption) => 
{
	return {
		type: UPDATE_COIN,
		payload
	}
}

export const actGetAllCoinRequest = () => 
{
	return {
		type: GET_ALL_COINS_REQUEST
	}
}

export const actGetFavoriteCoinList = () => {
	return {
		type: GET_FAVORITE_COINS_REQUEST
	}
}

export const actSetCoinList = (payload: ICoin[]) =>
{
	return {
		type: SET_COIN_LIST,
		payload
	}
}

export const actSetFavoriteCoinList = (payload: ICurrencyOption[]) =>
{
	return {
		type: SET_FAVORITE_COIN_LIST,
		payload
	}
}

export const actCreateFavoriteCoin = (payload: string) =>
{
	return {
		type: ADD_NEW_COIN_REQUEST,
		payload
	}
}

export const actRemoveFavoriteCoinRequest = (payload: string) =>
{
	return {
		type: REMOVE_COIN_REQUEST,
		payload
	}
}

export const actUpdateCoinRequest = (payload: ICurrencyOption) =>
{
	return {
		type: UPDATE_COIN_REQUEST,
		payload
	}
}

