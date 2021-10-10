export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE";

let headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");
// headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
headers.append("Origin", "http://localhost:3000");

export const getCategories = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_CATEGORIES });
    return fetch("https://fakestoreapi.com/products/categories", {
      headers: headers,
    })
      .then((res) => res.json())
      .then((response) => {
        dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: response });
        return response;
      })
      .catch((err) => {
        dispatch({ type: FETCH_CATEGORIES_FAILURE });
      });
  };
};
