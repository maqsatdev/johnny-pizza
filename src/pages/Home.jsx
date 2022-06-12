import React from "react";
import { useSelector } from "react-redux";

// components
import { Catalog } from "../components";

const Home = () => {
  const categoryList = useSelector(({ categories }) => categories.categories);

  return (
    <React.Fragment>
      {categoryList &&
        categoryList.map((category) => (
          <Catalog
            title={category.name}
            code={category.code}
            key={category.code}
            categoryId={category.id}
          />
        ))}
    </React.Fragment>
  );
};

export default Home;
