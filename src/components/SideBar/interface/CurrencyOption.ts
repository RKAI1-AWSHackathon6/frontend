import { ICoin, ICurrencyOption } from "@/redux/interface";

export interface ICurrencyOptionProps {
    currencyOption: ICurrencyOption;
    coinList: ICoin[];
    actUpdateCoinRequest: (payload: ICurrencyOption) => void;
}