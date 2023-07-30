import ArticleDetails from "@/components/Article/ArticleDetails";
import ArticleGrid from "@/components/Article/ArticleGrid";
import SideBar from "@/components/SideBar";
import TabBar from "@/components/Tab";
import { Col, Row } from "antd";
import { HomepageWrapper, MainSection, RightSection } from "./style";

const HomePage = () => 
{
	return (
		<HomepageWrapper>
			<Row style={{height: "100%"}}>
				<Col className="left" span={4}>
					<SideBar/>
				</Col>
				<Col className="main" span={20} style={{height: "100%"}}>
					<Row style={{height: "100%"}}>
						<Col span={16} style={{height: "100%"}}>
							<MainSection>
								<TabBar />
								<ArticleGrid />
							</MainSection>
						</Col>
						<Col span={8} style={{height: "100%"}}>
							<RightSection>
								<ArticleDetails />
							</RightSection>
						</Col>
					</Row>
				</Col>
			</Row>
		</HomepageWrapper>	
	);
};

export default HomePage;