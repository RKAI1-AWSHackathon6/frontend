import PrimaryButton from "@/components/Button";
import { connect } from "react-redux";
import { IArticleItemProps } from "../interface/ArticleItem";
import { ArticleItemWrapper } from "./style"
import { actSelectArticle } from "@/redux/action";
import Ribbon from "@/components/Ribbon";
import { useState } from "react";
import CurrencyLabel from "@/components/Currency/CurrencyLabel";

const ArticleItem = (props: IArticleItemProps) => {
    const {article} = props;
    const [displaySummary, setDisplaySummary] = useState(false);

    return <ArticleItemWrapper 
            onMouseEnter={() => setDisplaySummary(true)}
            onMouseLeave={() => setDisplaySummary(false)}
            onClick={() => props.actSelectArticle(article)}
        >
        <div className="main">
            <Ribbon label={article.label} />
            <div 
                className="thumbnail"
                // style={{
                //     backgroundImage: `url(${article.image})`,
                // }}
            >
                    <img src={article.image} alt={article.image}/>
                {displaySummary && <div className="summary-wrapper"> 
                    <div className="summary">{article.summary}</div>
                </div>}
            </div>
            <div className="content">
                <div className="header">
                    <span className="currency">
                        {article.relatedCurrency && <CurrencyLabel currency={article.relatedCurrency}/>}
                    </span>
                    <span className="time">
                        {article.publishedTime}
                    </span>
                </div>
                <span className="title">{article.title}</span>
                <div className="keywords">
                    {article.keywords.map((keyword, index) => (
                        <span key={index}>{keyword}</span>
                    ))}
                </div>

                <PrimaryButton title="Read more" onClick={() => window.open(article.url)}/>
            </div>
        </div>
        
    </ArticleItemWrapper>
}

export default connect(() => ({}), {
    actSelectArticle
})(ArticleItem);