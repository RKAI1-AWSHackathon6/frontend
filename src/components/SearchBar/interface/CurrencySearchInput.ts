import { ICoin, ICurrencyOption } from "@/redux/interface";

export interface ICurrencySearchInputProps {
    coinList: ICoin[];
    currencyList: ICurrencyOption[];
    actCreateFavoriteCoin: (currencyId: string) => void;
    actRemoveFavoriteCoinRequest: (optionId: string) => void;
    actGetAllCoinRequest: () => void;
}