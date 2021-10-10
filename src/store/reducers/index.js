import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as categoriesReducer } from "./categories";
import { reducer as productsbyCategoryReducer } from "./productsbycategory";
import { reducer as cartActionsReducer } from "./cart";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    categories: categoriesReducer,
    productsbyCategory: productsbyCategoryReducer,
    cart: cartActionsReducer,
  });
export default rootReducer;
