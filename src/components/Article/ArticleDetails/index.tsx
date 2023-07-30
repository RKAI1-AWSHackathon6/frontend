import Ribbon from "@/components/Ribbon"
import TextSection from "@/components/Section/TextSection"
import { RootState } from "@/redux/reducer"
import { List } from "antd"
import { connect } from "react-redux"
import { IArticleDetailsProps } from "../interface/ArticleDetails"
import { ArticleDetailsWrapper } from "./style"

const ArticleDetails = (props: IArticleDetailsProps) => {
    const {article} = props;

    if (article) {
    return <ArticleDetailsWrapper>
        <div>
            <a href={article.url} target="_blank" rel="noreferrer">
                <h1>{article.title}</h1>
            </a>
            <span className="metadata">
                <span className="source">{article.source}</span>
                <span className="delimiter">/</span>
                <span className="published-date">{article.publishedTime}</span>
            </span>
        </div>
        <Ribbon label={article.label}/>
        <img src={article.image} alt="" />
        <TextSection title="Summary">
            <div className="summary">
                {article.summary}
            </div>
        </TextSection>
        <TextSection title="Comment">
            <div className="summary">
                {article.explain}
            </div>
        </TextSection>

        <TextSection title="Keywords">
            <List
                itemLayout="horizontal"
                dataSource={article.keywords}
                renderItem={(keyword, index) => (
                    <span className="keyword">
                        {keyword}
                    </span>
                )}
            />
        </TextSection>
    </ArticleDetailsWrapper>
    }
    return null;
}

export default connect((root: RootState) => ({
    article: root.App.selectedArticle
}))(ArticleDetails);