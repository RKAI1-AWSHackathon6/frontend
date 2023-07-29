import { ArticleLabel } from "@/redux/interface";
import { Tabs } from "antd"
import { ITabProps } from "../interface/Tab";
import { TabBarWrapper } from "./style";
import { actGetArticleList, actSetSelectedLabel } from "@/redux/action";
import { connect } from "react-redux";
import { RootState } from "@/redux/reducer";
import { useEffect } from "react";

const TabBar = (props: ITabProps) => {
    const items = [{
        key: ArticleLabel.All,
        label: "All",
    }, {
        key: ArticleLabel.Positive,
        label: "Positive",
    }, {
        key: ArticleLabel.Negative,
        label: "Negative"
    }, {
        key: ArticleLabel.Neutral,
        label: "Neutral"
    }];

    useEffect(() => {
        props.actGetArticleList({
            label: props.selectedLabel
        })
    }, []);

    return (<TabBarWrapper>
        <Tabs
            activeKey={props.selectedLabel}
            items={items}
            onChange={(activeKey) => {
                props.actSetSelectedLabel(activeKey as ArticleLabel);
                props.actGetArticleList({
                    label: activeKey as ArticleLabel
                });
            }}
        />
    </TabBarWrapper>);
};

export default connect((state: RootState) => ({
    selectedLabel: state.App.selectedLabel
}),{
    actGetArticleList,
    actSetSelectedLabel
})(TabBar);