import { ArticleLabel } from "@/redux/interface";
import { IRibbonProps } from "../interface/Label"
import { RibbonWrapper } from "./style"

const Ribbon = (props: IRibbonProps) => {
    const {label} = props;



    let ribbonColor: string;

    switch (label) {
        case ArticleLabel.Positive:
            ribbonColor = "var(--color-positive)";
            break;
        case ArticleLabel.Negative:
            ribbonColor = "var(--color-negative)";
            break;
        default:
            ribbonColor = "var(--color-neutral)";
    }

    return <RibbonWrapper background={ribbonColor}>
        <div className="ribbon">
            {label}
        </div>
    </RibbonWrapper>
}

export default Ribbon;