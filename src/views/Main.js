import React, { useEffect } from "react";
import { connect } from "react-redux";
import ShopCard from "./Card";
import ShopLoader from "../components/Loader";
import { getCategories } from "../store/actions";
import { Card } from "semantic-ui-react";

const Main = ({ loading, categories = [], getCategories, history }) => {
  useEffect(() => {
    getCategories();
  }, [getCategories]);
  console.log(categories);
  const CategoriesListView = () => {
    return (
      <Card.Group itemsPerRow={2}>
        {categories.map((category, ix) => (
          <ShopCard
            key={ix}
            name={category}
            onClick={() => history.push(`/products/${category}`)}
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
          <CategoriesListView />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories.data,
  loading: state.categories.loading,
  haveData: state.categories.haveData,
});
const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategories()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
