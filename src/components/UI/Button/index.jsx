import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

// style
import "./Button.css";

const Button = ({
  isLink,
  href,
  type,
  text,
  icon,
  children,
  onClickBtn,
  className,
}) => {
  const btnClass = cn(
    {
      "btn btn-default": true,
      "btn-cart": type === "cart",
      "btn-grey": type === "grey",
    },
    className
  );

  return isLink ? (
    <Link to={href} className={btnClass}>
      {icon && <i className={cn("fa", `fa-${icon}`)}></i>}
      <span className="text">{text}</span>
      {children}
    </Link>
  ) : (
    <button className={btnClass} onClick={onClickBtn}>
      {icon && <i className={cn("fa", `fa-${icon}`)}></i>}
      <span className="text">{text}</span>
      {children}
    </button>
  );
};

export default Button;
