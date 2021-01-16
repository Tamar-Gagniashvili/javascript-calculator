import React from "react";
import "./Button.css";

const isOperator = val => {
  return !isNaN(val) || val === "." || val === "=";
};


export const Button = props => {

  const classess = ['button-wrapper']
  isOperator(props.children) ? classess.push('operator') : null;
  props.children === "=" ? classess.push('equals') : null;
  props.children === "0" ? classess.push('zero') : null;



  return (
    <div
      className={classess.join(" ")}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}

    </div>
  )

};