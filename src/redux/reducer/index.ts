import { combineReducers } from "redux";
import App from "./app";

const rootReducer = combineReducers({
	App,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
