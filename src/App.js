import Main from "./views/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductsByCategory from "./views/ProductsByCategory";
import AuthBar from "./views/AuthBar";
import { connect } from "react-redux";
import { removeFromCart } from "./store/actions/cart";

const App = (props) => {
  const { cartData, removeFromCart } = props;
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("cartData");
    window.location.reload();
  };

  return (
    <>
      <AuthBar
        handleLogout={handleLogout}
        removeFromCart={removeFromCart}
        cartData={cartData}
        isLogin={localStorage.getItem("token")}
      />

      <Router>
        <Route path="/" exact={true} component={Main} />
        <Route path="/products/:type" exact component={ProductsByCategory} />
      </Router>
    </>
  );
};
const mapStateToProps = (state) => ({
  cartData: state.cart.data || [],
});
export default connect(mapStateToProps, { removeFromCart })(App);
