import styled from "styled-components";

export const ArticleDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4rem 2.4rem;
    gap: 2.4rem;
    position: relative;

    img {
        width: 100%;
        aspect-ratio: 16/9;
        border-radius: 30px;
    }

    h1 {
        font-size: 1.8rem;
        color: var(--color-text);
    }

    .metadata {
        margin: 2rem 0;
        font-size: 1.4rem;

        .source {
            text-transform: uppercase;
            color: var(--color-primary);
        }

        .delimiter {
            margin: 0 0.8rem;
            color: var(--color-text);
        }

        .published-date {
            color: var(--color-text-light);
        }
    }

    .ant-list-items {
        display: flex;
        flex-wrap: wrap;

        span.keyword {
            color: var(--color-text);
            font-weight: 600;
            padding: 0.6rem 1.2rem;
            border-radius: 2rem;
            background: var(--color-primary-gradient);
            margin-right: 1.6rem;
            margin-bottom: 1.2rem;
        }
    }

    

    .summary {
        font-size: 1.4rem;
        background: var(--color-background);
        border-radius: 1rem;
        padding: 1rem;
        max-height: 20rem;
        overflow-y: auto;
        color: var(--color-text);
    }
`;