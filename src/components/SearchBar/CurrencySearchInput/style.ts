import styled from "styled-components";

export const CurrencySearchInputWrapper = styled.div`
    width: 100%;

    .ant-select {
        width: 100%;
        /* padding: 0 2.4rem; */
        /* min-height: 4.8rem; */
        color: var(--color-text);

        .ant-select-selector {
            background: var(--color-background-light);
            border: none;
            height: 100%;
            border-radius: 10px;
            padding: 1rem;

            .ant-tag, .ant-select-selection-item {
                height: 3.2rem;
                margin-bottom: 0.5rem;
                display: flex;
                color: var(--color-text);
                background: var(--color-primary);
                align-items: center;
                justify-content: center;
                border-radius: 10px;
            }
        }
    }
`;

export const CurrencyInputItemWrapper = styled.div`
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