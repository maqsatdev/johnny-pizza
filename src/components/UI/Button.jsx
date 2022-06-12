import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

const Button = ({ isLink, href, type, text, icon, children, onClickBtn }) => {
  return isLink ? (
    <Link
      to={href}
      className={cn("btn btn-default", { "btn-cart": type === "cart" })}
    >
      {icon && <i className={cn("fa", `fa-${icon}`)}></i>}
      <span className="text">{text}</span>
      {children}
    </Link>
  ) : (
    <button
      className={cn("btn btn-default", `btn-${type}`)}
      onClick={onClickBtn}
    >
      {icon && <i className={cn("fa", `fa-${icon}`)}></i>}
      <span className="text">{text}</span>
      {children}
    </button>
  );
};

export default Button;
