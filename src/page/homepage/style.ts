import styled from "styled-components";

const HomepageWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const LeftSection = styled.div`
    width: 100%;
    height: 100%;
`;

const MainSection = styled.div`
    display: flex;
    overflow: auto;
    flex-direction: column;
    /* flex-grow: 1; */
    height: 100%;
    border-radius: 40px 0 0 40px;
    padding: 3.2rem;
    background: var(--color-background-dark);
`;

const RightSection = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50px 0 0 50px;
    background: var(--color-background-gray);
`;

export {HomepageWrapper, MainSection, LeftSection, RightSection};