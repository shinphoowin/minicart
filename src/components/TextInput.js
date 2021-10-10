import React from "react";
import { Input } from "semantic-ui-react";

const TextInput = ({ placeholder, onChange, error, value, type, name }) => (
  <div className="field">
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
    {error ? <em className="Error">{error}</em> : ""}
  </div>
);

export default TextInput;
