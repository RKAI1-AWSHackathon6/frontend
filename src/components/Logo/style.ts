import styled from "styled-components";

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 4.2rem;
        height: 4.2rem;
    }

    h1 {
        text-transform: uppercase;
        font-size: 2.4rem;
        color: var(--color-text);
        margin: 0;
    }
`;

export { LogoWrapper}