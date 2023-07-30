import styled from "styled-components";

const HomepageWrapper = styled.div`
    width: 100%;
    height: 100%;

    .left {
        width: 100%;
        height: 100%;
    }

    .main {
        background: var(--color-background-dark);
        border-radius: 40px 0 0 40px;
    }
`;

const MainSection = styled.div`
    display: flex;
    overflow: auto;
    flex-direction: column;
    /* flex-grow: 1; */
    height: 100%;
    
    padding: 3.2rem;
    
`;

const RightSection = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50px 0 0 50px;
    background: var(--color-background-gray);
    overflow-y: auto;
    overflow-x: hidden;
`;

export {HomepageWrapper, MainSection, RightSection};