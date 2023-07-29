import styled from "styled-components";

export const ArticleGridWrapper = styled.div`
    overflow-y: auto;
    overflow-x: hidden;

    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    &::-webkit-scrollbar {
        display: none;
    }

`;