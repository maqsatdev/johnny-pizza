import { useEffect, useState } from "react";

import instance from "../api/instance";

// components
import { Product } from "../components";
import ProductLoader from "./ProductLoader";

const Catalog = ({ title, code, categoryId, items }) => {
  const [products, setProducts] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    if (categoryId) {
      instance.get(`products?category_id=${categoryId}`).then(({ data }) => {
        setProducts(data);
        setLoaded(true);
      });
    } else {
      setProducts(items);
      setLoaded(true);
    }
  }, [items]);

  return (
    <div className="catalog-section" id={code}>
      <div className="container">
        {isLoaded ? (
          <>
            <h4 className="catalog-title">{title}</h4>
            <div className="catalog-items">
              {products.length
                ? products.map((product) => (
                    <Product data={product} key={product.id} />
                  ))
                : "Продуктов нет"}
            </div>
          </>
        ) : (
          <>
            <h4 className="catalog-title"></h4>
            <div className="catalog-items">
              {Array(8)
                .fill(0)
                .map((_, idx) => (
                  <ProductLoader key={idx} />
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Catalog;
