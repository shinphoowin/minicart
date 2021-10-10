import { FETCH_CATEGORIES, FETCH_CATEGORIES_SUCCESS } from "../actions";

const initialState = {
  loading: true,
  haveData: false,
  data: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        loading: true,
        haveData: false,
      };

    case FETCH_CATEGORIES_SUCCESS:
      return {
        loading: false,
        haveData: true,
        data: action.payload,
      };
    default:
      return state;
  }
};
