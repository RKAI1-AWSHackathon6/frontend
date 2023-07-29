import { Button } from "antd"
import { IPrimaryButtonProps } from "./interface/Primary";

const PrimaryButton = (props: IPrimaryButtonProps) => {
    const { title, onClick} = props;

    return <Button
        type="primary"
        onClick={onClick}
        style={{
            background: "linear-gradient(45deg, #9E4FD8 0%, #6D4CF8 100%)",
            border: "none",
            fontWeight: 600,
            width: "fit-content",
            borderRadius: "20px",
            color: "var(--color-text)"
        }}
    >
        {title}
    </Button>
}

export default PrimaryButton;