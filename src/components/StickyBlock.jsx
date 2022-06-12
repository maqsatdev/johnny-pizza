import React from "react";
import { useSelector } from "react-redux";

// components
import { Navbar, Button } from "./index";

const StickyBlock = () => {
  const categoryList = useSelector(({ categories }) => categories.categories);

  return (
    categoryList && (
      <div className="sticky-block">
        <div className="container">
          <div className="sticky-block__flex">
            <Navbar list={categoryList} />
            <Button
              isLink
              href="/cart"
              text="Корзина"
              type="cart"
              icon="shopping-cart"
            >
              <span className="count">0</span>
            </Button>
          </div>
        </div>
      </div>
    )
  );
};

export default StickyBlock;
