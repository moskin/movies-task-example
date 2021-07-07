import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { compose } from "redux";
import {appReducer} from "./appReducer";

const reducers = combineReducers({
    app: appReducer
});

const enhanceMiddleware = compose(applyMiddleware(thunk));
const store = createStore(reducers, enhanceMiddleware);
export default store;