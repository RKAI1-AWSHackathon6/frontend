import styled from "styled-components";

export const ArticleItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 1.5rem;
    cursor: pointer;

    .main {
        position: relative;

        .thumbnail {
            border-radius: 3rem 3rem 0 0;
            width: 100%;
            aspect-ratio: 16/9;
            position: relative;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            display: flex;
            clip: auto;
            align-items: center;
            justify-content: center;
            overflow: hidden;

            img {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 100%;
                height: 100%;
                transform: translate(-50%, -50%);
                transition: width 0.5s, height 0.5s;
                z-index: 0;
            }

            &:hover img {
                width: 120%;
                height: 120%;
            }
            
            .summary-wrapper {
                width: 100%;
                height: 100%;
                padding: 2.4rem;
                z-index: 2;
                .summary {
                    max-height: 100%;
                    border-radius: 20px;
                    background: rgba(30, 39, 43, 0.85);
                    color: var(--color-text);
                    font-size: 1.4rem;
                    padding: 2rem;
                    overflow-y: auto;
                }
            }
        }

        div.content {
            border-radius: 3rem;
            transform: translateY(-2rem);
            display: flex;
            gap: 1.6rem;
            flex-direction: column;
            color: var(--color-text);
            padding: 3rem 2rem;
            background: var(--color-background-light);

            div.header {
                display: flex;
                align-items: center;

                span.currency {
                    width: fit-content;
                    background: #827f9573;
                    padding: 0.4rem 0.8rem;
                    border-radius: 10px;
                }

                span.time {
                    text-align: right;
                    flex-grow: 1;
                    color: var(--color-text-light);
                }
            }

            span.title {
                font-size: 1.6rem;
                display: block;
                font-weight: 600;
                text-overflow: ellipsis;
                /* white-space: nowrap; */
                word-wrap: break-word;
                overflow: hidden;
                max-height: 7.2rem;
            }

            div.keywords {
                display: flex;
                flex-wrap: wrap;

                span {
                    margin-right: 0.8rem;
                    margin-bottom: 0.8rem;
                    font-size: 1.4rem;
                    border-radius: 2rem;
                    padding: 0 1rem;
                    background: var(--color-background);
                    color: #BBBBBB;
                }
            }
        }
    }
`;