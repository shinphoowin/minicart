import {
  FETCH_PRODUCTS_BY_CATEGORY,
  FETCH_PRODUCTS_BY_CATEGORY_FAILURE,
  FETCH_PRODUCTS_BY_CATEGORY_SUCCESS,
} from "../actions";

const initialState = {
  loading: true,
  haveData: false,
  data: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        loading: true,
        haveData: false,
      };
    case FETCH_PRODUCTS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        haveData: true,
        data: action.payload,
      };
    case FETCH_PRODUCTS_BY_CATEGORY_FAILURE:
      return initialState;
    default:
      return state;
  }
};
