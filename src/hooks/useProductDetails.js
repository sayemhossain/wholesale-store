import { useEffect, useState } from "react";

const useProductDetails = ({ productId }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://stark-shelf-45913.herokuapp.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId, product]);
  return [product];
};
export default useProductDetails;
