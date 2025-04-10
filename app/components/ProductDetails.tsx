import React, { useState } from "react";
import { products } from "../data/products";

const ProductDetails = ({ productId }: { productId: string }) => {
  const product = products.find((p) => p.id === productId);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const totalPrice = product.price * quantity; // Calculate total price dynamically

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price per piece: ${product.price.toFixed(2)}</p>

      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
          className="border rounded px-2 py-1"
        />
      </div>

      <p className="mt-4">Total Price: ${totalPrice.toFixed(2)}</p>

      <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded">
        Buy Now
      </button>
    </div>
  );
};

export default ProductDetails;
