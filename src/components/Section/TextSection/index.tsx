import { ITextSectionProps } from "../interface/TextSection";
import { SectionWrapper } from "./style"

const TextSection = (props: ITextSectionProps) => {
    const {title, children} = props;

    return <SectionWrapper>
        <h2 className="title">{title}</h2>
        <div>
            {children}
        </div>
    </SectionWrapper>;
}

export default TextSection