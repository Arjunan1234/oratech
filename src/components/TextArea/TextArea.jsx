import React from "react";
import "./textArea.scss";

const TextArea = ({
  label,
  name,
  placeholder,
  value,
  onChange = () => {},
  error,
}) => {
  return (
    <div className="container inputContainer">
      <label htmlFor={name}>
        {label} <span>*</span>
      </label>
      <textarea
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default TextArea;
