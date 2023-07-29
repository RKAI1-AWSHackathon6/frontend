import styled from "styled-components";

export const SocialItemWrapper = styled.div`
    display: flex;
    gap: 1.2rem;
    align-items: center;
    padding: 1rem 0;
    color: var(--color-text);
    font-size: 1.4rem;

    img {
        width: 2rem;
        height: 2rem;
    }

    span.text {
        flex-grow: 1;
        white-space: nowrap;
        text-overflow: ellipsis; 
        overflow: hidden;
        min-width: 0;
    }

    span.anticon {
        cursor: pointer;
    }
    
`;