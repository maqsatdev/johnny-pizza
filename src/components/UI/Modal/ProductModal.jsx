import React from "react";

const ProductModal = ({ data }) => {
  const { id } = data;
  return <div>ID товара: {id}</div>;
};

export default ProductModal;
