import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// components
import { Catalog } from "../components";

const Home = () => {
  const categoryList = useSelector(({ categories }) => categories.categories);

  return (
    <>
      {categoryList &&
        categoryList.map((category) => (
          <Catalog
            title={category.name}
            code={category.code}
            key={category.code}
            categoryId={category.id}
          />
        ))}
    </>
  );
};

export default Home;
