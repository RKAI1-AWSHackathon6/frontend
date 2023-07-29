import { ICoin, ICurrencyOption } from "@/redux/interface";
import { ISocialMedia } from "@/redux/interface/social";

export interface ISideBarProps {
    currencyList: ICurrencyOption[];
    coinList: ICoin[];
    socialMediaList: ISocialMedia[];

    actGetFavoriteCoinList: () => void;
}