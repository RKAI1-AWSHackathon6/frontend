import { Provider } from "react-redux";
import { store } from "@/config/store";
import { QueryClient, QueryClientProvider } from "react-query";
import AppRoute from "@/route";
import "antd/dist/antd.variable.min.css";
import { GlobalStyle } from "./style";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";

ConfigProvider.config({
	theme : {
		primaryColor : "#634BFF"
	}
});

const queryClient = new QueryClient();

const App = () => 
{
	return (
		<Provider store={store}>
			{/* <PersistGate persistor={persistor}> */}
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<AppRoute />
				</BrowserRouter>
			</QueryClientProvider>
			<GlobalStyle />
			{/* </PersistGate> */}
		</Provider>
	);
};

export default App;
