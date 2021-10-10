import React from "react";
import { Dropdown } from "semantic-ui-react";

const DropDown = ({
  options,
  placeholder,
  onChange,
  products,
  setfilterProducts,
}) => (
  <>
    <Dropdown
      search
      selection
      closeOnChange
      options={options}
      placeholder={placeholder}
      onChange={(e, { value }) => onChange(value, products, setfilterProducts)}
    />{" "}
  </>
);

export default DropDown;
