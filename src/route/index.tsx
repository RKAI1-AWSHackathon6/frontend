import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { routesConfig } from "./config";

const AppRoute = () => 
{
	return (
		<Routes>
			{routesConfig.map((routeInfo, index) => 
			{
				const { element: ComponentInRoute, ...rest } = routeInfo;

				return <Route key={index} element={<ComponentInRoute />} {...rest} />;
			})}
		</Routes>
	);
};

export default connect(
	() => ({}),
	{ }
)(AppRoute);
