import { all, fork } from "redux-saga/effects";
import currencySaga from "./currency";
import articleSaga from "./article";

function *rootSaga()
{
	yield all([ 
		fork(currencySaga),
		fork(articleSaga)
	]);
}

export default rootSaga;
