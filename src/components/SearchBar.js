import _ from "lodash";
import React, { Component } from "react";
import { Search } from "semantic-ui-react";

export default class SearchBar extends Component {
  state = {
    isLoading: false,
    results: this.props.cartData,
    value: "",
  };

  handleResultSelect = (e, { result }) => {
    console.log(this.state.value);
    this.setState({ value: result.title });
  };

  handleSearchChange = _.debounce((e, { value }) => {
    this.setState({ isLoading: true, value });
    console.log(value);
    //setTimeout(() => {
    if (this.state.value.length < 1) return this.setState(this.state);

    const re = new RegExp(_.escapeRegExp(this.state.value), "i");
    const isMatch = (result) => re.test(result.title);

    const filteredResults = _.reduce(
      [],
      (memo, cartData, name) => {
        const results = _.filter(cartData, isMatch);
        if (results.length) memo[name] = { name, results }; // eslint-disable-line no-param-reassign

        return memo;
      },
      {}
    );

    this.setState({
      isLoading: false,
      results: filteredResults,
    });
    //}, 300);
  }, 400);

  handleSearchQuery = _.debounce(
    (e, { value }) => {
      console.log(e);
      console.log("is deboucne woek");
      this.setState({
        value: value,
      });
    },
    { leading: true },
    1000
  );

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <>
        <em style={{ float: "left", fontSize: "2em", marginTop: "8px" }}>
          Mini Shop
        </em>
        <Search
          category
          loading={isLoading}
          //onResultSelect={this.handleResultSelect}
          onSearchChange={this.handleSearchQuery}
          //onSearchChange={_.debounce(this.handleSearchQuery, 500, {})}
          //results={results}
          value={value}
        />
      </>
    );
  }
}
