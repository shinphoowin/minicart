import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
//import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const createAppStore = (initialState, history) => {
  return createStore(
    rootReducer(history),
    initialState,
    compose(applyMiddleware(thunk, routerMiddleware(history)))
  );
};
export default createAppStore;
