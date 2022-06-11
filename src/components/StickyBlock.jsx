import React from "react";
import { useSelector } from "react-redux";

// components
import { Navbar, CartBtn } from "./index";

const StickyBlock = () => {
  const categoryList = useSelector(({ categories }) => categories.categories);

  return (
    categoryList && (
      <div className="sticky-block">
        <div className="container">
          <div className="sticky-block__flex">
            <Navbar list={categoryList} />
            <CartBtn />
          </div>
        </div>
      </div>
    )
  );
};

export default StickyBlock;
