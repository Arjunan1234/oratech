import React from "react";
import "./input.scss";
const Input = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange = () => {},
  error,
}) => {
  return (
    <div className="container inputContainer">
      <label htmlFor="">
        {label} <span>*</span>
      </label>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="input"
      />

      <p className="error"> {error}</p>
    </div>
  );
};

export default Input;
