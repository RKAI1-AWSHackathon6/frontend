import { RootState } from "@/redux/reducer";
import { List } from "antd";
import { useEffect } from "react";
import { connect } from "react-redux"
import { ISideBarProps } from "../interface/sidebar";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import TextSection from "../Section/TextSection";
import SocialItem from "../Social";
import CurrencyOption from "./CurrencyOption";
import { SideBarWrapper } from "./style";
import { actGetFavoriteCoinList } from "@/redux/action";

const SideBar = (props: ISideBarProps) => {

    const {currencyList, socialMediaList} = props;

    useEffect(() => {
        props.actGetFavoriteCoinList();
    }, []);

    return <SideBarWrapper>
        <Logo/>
        <SearchBar />
        <TextSection title="Your currency">
            <List 
                dataSource={currencyList}
                renderItem={(item, index) => {
                    return <CurrencyOption key={item.currencyId} currencyOption={item} />
                }}
            />
        </TextSection>
        <TextSection title="Notifications">
            <List
                dataSource={socialMediaList}
                renderItem={(item, index) => {
                    return <SocialItem key={index} socialMedia={item} />
                }}
            />
        </TextSection>
    </SideBarWrapper>
}

export default connect((state: RootState) => ({
    coinList: state.App.coinList,
    currencyList: state.App.currencyList,
    socialMediaList: state.App.socialMedia
}), {
    actGetFavoriteCoinList
})(SideBar);