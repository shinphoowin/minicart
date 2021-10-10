import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getProductsByCategory } from "../store/actions";
import { Card } from "semantic-ui-react";
import ShopLoader from "../components/Loader";
import ProductCard from "./ProductCard";
import LoginPopup from "./LoginPopup";
import DropDown from "../components/DropDown";
import { addToCart } from "../store/actions/cart";
import { handleFilter } from "../custom";

const filterOptions = [
  {
    key: 1,
    value: "price- High to Low",
    text: "price- High to Low",
  },
  {
    key: 2,
    value: "price- Low to High",
    text: "price- Low to High",
  },
];

const ProductsByCategory = (props) => {
  const { getProductsByCategory, products, loading, type, addToCart } = props;
  const [showPopUp, setShowPopUp] = useState(false);
  const [filterProducts, setfilterProducts] = useState(products);

  useEffect(() => {
    getProductsByCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleShowPopUp = () => {
    setShowPopUp(!showPopUp);
  };

  const ProductsUi = ({ products }) => {
    return (
      <Card.Group itemsPerRow={1}>
        {products.map((product, ix) => (
          <ProductCard
            key={ix}
            product={product}
            handleShowPopUp={handleShowPopUp}
            addToCart={addToCart}
          />
        ))}
      </Card.Group>
    );
  };

  return (
    <div>
      {loading ? (
        <ShopLoader />
      ) : (
        <div className="shop-container">
          <DropDown
            options={filterOptions}
            placeholder="Filter By Price"
            onChange={handleFilter}
            setfilterProducts={setfilterProducts}
            products={products}
          />
          <ProductsUi products={products} />
        </div>
      )}
      {showPopUp ? (
        <LoginPopup
          open={localStorage.getItem("token") ? false : showPopUp}
          size="tiny"
          title="Please Login to proceed"
          type={type}
          handleShowPopUp={handleShowPopUp}
        />
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart,
  products: state.productsbyCategory.data,
  loading: state.productsbyCategory.loading,
});
const mapDispatchToProps = (dispatch, props) => ({
  type: props.match.params.type,
  history: props.history,
  getProductsByCategory: () =>
    dispatch(getProductsByCategory(props.match.params.type)),
  addToCart: (item) => dispatch(addToCart(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductsByCategory);
