import styled from "styled-components";

export const TabBarWrapper = styled.div`
    color: var(--color-text);

    .ant-tabs {
        .ant-tabs-nav:before {
            border-bottom-color: #e0ddfa42;
        }

        .ant-tabs-nav-list {
            .ant-tabs-tab {
                color: var(--color-text);
                font-size: 1.6rem;

                

                /* &.ant-tabs-tab-active {
                    .ant-tabs-tab-btn {
                        color: var(--color-primary)!important;
                    }
                } */
            }
        }
    }
`;