import styled from "styled-components";

const SideBarWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 2rem;
    padding: 2rem;
    flex-direction: column;

    .coin-list {
        div.coin {
            img {
                width: 2rem;
                height: 2rem;
            }

            .name {
                font-size: 1rem;
            }
        }
    }
`;

export {SideBarWrapper}