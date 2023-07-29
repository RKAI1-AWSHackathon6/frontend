import styled from "styled-components";

export const CurrencyLabelWrapper = styled.span`
    display: flex;
    align-items: center;
    
    img {
        width: 2rem;
        height: 2rem;
    }

    span.text {
        font-size: 1.6rem;
        color: var(--color-text);
        margin-left: 0.8rem;
    }
`;