import { useEffect, useState } from "react";

const useProductDetails = ({ productId }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId, product]);
  return [product];
};
export default useProductDetails;
