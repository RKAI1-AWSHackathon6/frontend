import styled from "styled-components";

export const RibbonWrapper = styled.div<{background: string}>`
    width: 85px;
    height: 88px;
    overflow: hidden;
    position: absolute;
    top: -3px;
    right: -3px;
    
    .ribbon {
        background: ${(props) => props.background};
        color: var(--color-text);
        font-size: 1.4rem;  
        text-align: center;
        text-shadow: rgba(255,255,255,0.5) 0px 1px 0px;
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        position: relative;
        z-index: 1;
        padding: 0.6rem 0;
        left: -5px;
        top: 15px;
        width: 120px;
        /* background-image: -webkit-gradient(linear, left top, left bottom, from(#ea181e), to(#b90005));
        background-image: -webkit-linear-gradient(top, #ea181e, #b90005);
        background-image: -moz-linear-gradient(top, #BFDC7A, #8EBF45);
        background-image: -ms-linear-gradient(top, #BFDC7A, #8EBF45);
        background-image: -o-linear-gradient(top, #BFDC7A, #8EBF45); */
        -webkit-box-shadow: 0px 0px 3px rgba(0,0,0,0.3);
        -moz-box-shadow: 0px 0px 3px rgba(0,0,0,0.3);
        box-shadow: 0px 0px 3px rgba(0,0,0,0.3);
    }
`;