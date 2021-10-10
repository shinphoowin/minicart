import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
const initialState = {
  loading: true,
  data: JSON.parse(localStorage.getItem("cartData") || "[]"),
};
export const reducer = (state = initialState, action) => {
  //console.log(action);
  //console.log(state);
  switch (action.type) {
    case ADD_TO_CART:
      let isExist = false;
      state.data.map((el) => {
        if (el.id === action.payload.id) {
          isExist = true;
          el.count++;
        }
        return isExist;
      });
      if (!isExist) {
        state.data.push({ ...action.payload, count: 1 });
        localStorage.setItem("cartData", JSON.stringify(state.data));
      }
      return {
        loading: false,
        data: [...state.data],
      };
    case REMOVE_FROM_CART:
      let result = state.data.filter((el) => el.id !== action.payload);
      localStorage.setItem("cartData", JSON.stringify(result));
      return {
        saving: false,
        data: [...result],
      };
    default:
      return state;
  }
};
