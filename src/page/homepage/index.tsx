import ArticleDetails from "@/components/Article/ArticleDetails";
import ArticleGrid from "@/components/Article/ArticleGrid";
import SideBar from "@/components/SideBar";
import TabBar from "@/components/Tab";
import { Col, Row } from "antd";
import { HomepageWrapper, LeftSection, MainSection, RightSection } from "./style";

const HomePage = () => 
{
	return (
		<HomepageWrapper>
			<Row style={{height: "100%"}}>
				<Col span={4} style={{height: "100%"}}>
					<LeftSection>
						<SideBar/>
					</LeftSection>
				</Col>
				<Col span={14} style={{height: "100%"}}>
					<MainSection>
						<TabBar />
						<ArticleGrid />
					</MainSection>
				</Col>
				<Col span={6} style={{height: "100%"}}>
					<RightSection>
						<ArticleDetails />
					</RightSection>
				</Col>
			</Row>
		</HomepageWrapper>	
	);
};

export default HomePage;