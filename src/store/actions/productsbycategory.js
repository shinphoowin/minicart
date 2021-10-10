export const FETCH_PRODUCTS_BY_CATEGORY = "FETCH_PRODUCTS_BY_CATEGORY";
export const FETCH_PRODUCTS_BY_CATEGORY_SUCCESS =
  "FETCH_PRODUCTS_BY_CATEGORY_SUCCESS";
export const FETCH_PRODUCTS_BY_CATEGORY_FAILURE =
  "FETCH_PRODUCTS_BY_CATEGORY_FAILURE";

let headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");
// headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
headers.append("Origin", "http://localhost:3000");

export const getProductsByCategory = (category) => {
  return (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_BY_CATEGORY });
    return fetch(`https://fakestoreapi.com/products/category/${category}`, {
      headers: headers,
    })
      .then((res) => res.json())
      .then((response) => {
        dispatch({
          type: FETCH_PRODUCTS_BY_CATEGORY_SUCCESS,
          payload: response,
        });
        return response;
      })
      .catch((err) => {
        dispatch({ type: FETCH_PRODUCTS_BY_CATEGORY_FAILURE });
      });
  };
};
