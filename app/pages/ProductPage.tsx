import React from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();

  return (
    <div>
      <ProductDetails productId={productId || ""} />
    </div>
  );
};

export default ProductPage;
