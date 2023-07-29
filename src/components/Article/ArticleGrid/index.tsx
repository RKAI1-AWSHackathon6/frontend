import { RootState } from "@/redux/reducer";
import { List } from "antd";
import { connect } from "react-redux";
import ArticleItem from "../ArticleItem";
import { IArticleGridProps } from "../interface/ArticleGrid";
import { ArticleGridWrapper } from "./style"

const ArticleGrid = (props: IArticleGridProps) => {
    const {articles} = props;

    return <ArticleGridWrapper>
        <List
            grid={{ lg: 2, xl: 2, xxl: 3}}
            dataSource={articles}
            renderItem={(article, index) => (
                <ArticleItem article={article}></ArticleItem>
            )}
        >
        </List>
    </ArticleGridWrapper>
};

export default connect((state: RootState) => ({
    articles: state.App.articles
}))(ArticleGrid);