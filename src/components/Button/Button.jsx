import React from "react";
import "./button.scss";

const Button = ({
  onClick = () => {},
  title = "Get Started",
  type = "button",
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`custom-button ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
