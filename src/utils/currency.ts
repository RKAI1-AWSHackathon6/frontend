import { ICoin } from "@/redux/interface";

export const getCoinById = (coinList: ICoin[], id: string) => {
    return  coinList.find((item) => item.id === id);
}