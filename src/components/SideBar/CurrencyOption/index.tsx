import CurrencyLabel from "@/components/Currency/CurrencyLabel";
import { ICurrencyOptionProps } from "../interface/CurrencyOption";
import { CurrecyOptionWrapper as CurrencyOptionWrapper } from "./style";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { connect } from "react-redux";
import {actUpdateCoinRequest} from "@/redux/action";
import { getCoinById } from "@/utils/currency";
import { RootState } from "@/redux/reducer";

const CurrencyOption = (props: ICurrencyOptionProps) => {
    const {currencyOption, coinList} = props;
    const {currencyId, visible} = currencyOption;
    const currency = getCoinById(coinList, currencyId);
    if (!currency) {
        return null;
    }

    return <CurrencyOptionWrapper 
            visible={visible}
            onClick={() => props.actUpdateCoinRequest({
                ...currencyOption,
                visible: !currencyOption.visible
            })}>
        <CurrencyLabel currency={currency}/>
        {visible ? <EyeFilled/> : <EyeInvisibleFilled/>}
    </CurrencyOptionWrapper>
}

export default connect((state: RootState) => ({
    coinList: state.App.coinList
}), {
    actUpdateCoinRequest
})(CurrencyOption);