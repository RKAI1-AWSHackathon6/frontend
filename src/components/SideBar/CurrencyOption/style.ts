import styled from "styled-components";

export const CurrecyOptionWrapper = styled.div<{visible: boolean}>`
    display: flex;
    padding: 1rem 0;
    align-items: center;
    cursor: pointer;
    opacity: ${(props) => props.visible ? 1 : 0.5};

    span:first-child {
        flex-grow: 1;
    }

    span.anticon {
        color: var(--color-text-secondary);
        font-size: 1.2rem;
    }
`;