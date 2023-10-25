import "./button.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface ButtonProps {
  text: string;
  onClick: string;
  className: string;
}

const Button = ({ text, onClick, className }: ButtonProps) => {

  const strNavigate = "/" + text.replace(" ", "");
  const navigate = useNavigate();
  const handleClick = () => {
    if (onClick === "navigate") {
      return navigate(strNavigate);
    }
  };
  const classNameText =  "button " + className;
  return (
    <div className={classNameText} onClick={handleClick}>
      {text}
    </div>
  );
};
export default Button;
