import { SOCIAL_MEDIA_CHANNEL } from "@/constants/social";
import { ADD_NEW_COIN, REMOVE_COIN, SELECT_ARTICLE, SET_ARTICLE_LIST, SET_COIN_LIST, SET_FAVORITE_COIN_LIST, SET_SELECTED_LABEL, UPDATE_COIN } from "../constants";
import { UPDATE_SOCIAL_MEDIA_VALUE } from "../constants/interface";
import { ReduxAction } from "../interface";
import { ArticleLabel, IAppState, IArticle, ICoin, ICurrencyOption } from "../interface/app";
import { ISocialMedia } from "../interface/social";

const initialState: IAppState = {
    selectedLabel: ArticleLabel.All,
	currencyList: [], 
    articles: [],
    coinList: [],
    selectedArticle: null,
    socialMedia: SOCIAL_MEDIA_CHANNEL
};

const reducer = (state = initialState, action: ReduxAction): IAppState => 
{
	const { type, payload } = action;

    switch (type) {

        case SET_COIN_LIST: {
            const coinList = payload as ICoin[];

            return {
                ...state,
                coinList
            }
        }

        case ADD_NEW_COIN: {
            const currencyOption = payload as ICurrencyOption;
            return {
                ...state,
                currencyList: [...state.currencyList, currencyOption]
            }
        }

        case UPDATE_COIN: {
            const currencyOption = payload as ICurrencyOption;
            const currencyIndex = state.currencyList.findIndex((item) => item.id === currencyOption.id);
            const newCurrencyList = [...state.currencyList];

            newCurrencyList[currencyIndex] = {
                ...currencyOption
            }

            return {
                ...state,
                currencyList: [...newCurrencyList]
            }
        }

        case SELECT_ARTICLE: {
            const article = payload as IArticle | null;
            return {
                ...state,
                selectedArticle: article
            }
        }

        case REMOVE_COIN: {
            const currencyOptionId = payload as string;
            const newCurrencyList = [...state.currencyList];
            const index = newCurrencyList.findIndex((value) => value.id === currencyOptionId);

            if (index !== -1) {
                newCurrencyList.splice(index, 1);
            }

            return {
                ...state,
                currencyList: newCurrencyList
            }
        }

        case UPDATE_SOCIAL_MEDIA_VALUE: {
            const socialMedia = payload as ISocialMedia;
            const newSocialMedia = [...state.socialMedia];
            const index = newSocialMedia.findIndex(item => socialMedia.name === item.name);
            if (index !== -1) {
                newSocialMedia[index] = {
                    ...newSocialMedia[index],
                    value: socialMedia.value
                }
            }

            return {
                ...state,
                socialMedia: newSocialMedia
            }
        }

        case SET_ARTICLE_LIST: {
            const articles = [...payload] as IArticle[];

            return {
                ...state,
                articles
            }
        }

        case SET_FAVORITE_COIN_LIST: {
            const currencyList = [...payload] as ICurrencyOption[];

            return {
                ...state,
                currencyList
            }
        }

        case SET_SELECTED_LABEL: {
            return {
                ...state,
                selectedLabel: payload
            }
        }
    }

	return state;

}

export default reducer;