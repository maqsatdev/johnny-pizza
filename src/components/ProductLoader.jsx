import React from "react";
import ContentLoader from "react-content-loader";

const ProductLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={270}
      height={400}
      viewBox="0 0 270 400"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="0" ry="0" width="270" height="270" />
      <rect x="0" y="280" rx="0" ry="0" width="270" height="50" />
      <rect x="0" y="342" rx="0" ry="0" width="270" height="30" />
    </ContentLoader>
  );
};

export default ProductLoader;
