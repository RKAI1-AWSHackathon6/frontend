import CurrencyLabel from "@/components/Currency/CurrencyLabel";
import { Select, Tag } from "antd"
import { CurrencySearchInputWrapper } from "./style";
import { actCreateFavoriteCoin, actRemoveFavoriteCoinRequest, actGetAllCoinRequest } from "@/redux/action";
import { ICurrencySearchInputProps } from "../interface/CurrencySearchInput";
import { connect } from "react-redux";
import { RootState } from "@/redux/reducer";
import { useEffect } from "react";
import { getCoinById } from "@/utils/currency";

const CurrencySearchInput = (props: ICurrencySearchInputProps) => {

    useEffect(() => {
        props.actGetAllCoinRequest();
    }, []);

    const {coinList, currencyList} = props;

    if (coinList.length === 0) {
        return null;
    }

    return (<CurrencySearchInputWrapper>
        <Select
            placeholder="Select one or more tokens"
            mode="multiple"
            labelInValue
            value={currencyList.map(currency => currency.currencyId)}
            tagRender={(props) => {
                const { value, closable, onClose } = props;
                const currency = getCoinById(coinList, value);
                return <Tag
                    color={value}
                    onMouseDown={(e) => {e.stopPropagation(); e.preventDefault()}}
                    closable={closable}
                    onClose={onClose}
                    style={{ marginRight: 3 }}
                >
                <CurrencyLabel currency={currency!}/>
              </Tag>
                    
            }}
            onSelect={(option) => {
                props.actCreateFavoriteCoin((option as any).value as string);
            }}
            onDeselect={(option) => {
                const currencyOption = currencyList.find(item => item.currencyId === (option as any).value as string);
                currencyOption && props.actRemoveFavoriteCoinRequest(currencyOption.id);
            }}
            filterOption={(input, option) => {
                const coin = getCoinById(coinList, option?.value as string);
                return coin && coin.name.toLowerCase().includes(input.toLowerCase()) ? true : false;
            }}
            options={coinList.map((currency) => ({
                value    : currency.id,
                label    : <CurrencyLabel currency={currency}/>
            }))}/>
    </CurrencySearchInputWrapper>)
}

export default connect((state: RootState) => ({
    coinList: state.App.coinList,
    currencyList: state.App.currencyList
}), {
    actCreateFavoriteCoin,
    actRemoveFavoriteCoinRequest,
    actGetAllCoinRequest
})(CurrencySearchInput);