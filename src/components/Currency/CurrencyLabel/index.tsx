import { ICurrencyLabelProps } from "../interface/CurrencyLabel";
import { CurrencyLabelWrapper } from "./style";

const CurrencyLabel = (props: ICurrencyLabelProps) => {
    const {currency} = props;

    return <CurrencyLabelWrapper>
        <img src={currency.image} alt="" />
        <span className="text">{currency.name}</span>
    </CurrencyLabelWrapper>
}

export default CurrencyLabel;