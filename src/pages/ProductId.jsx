import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import ProductInfo from "../components/productId/ProductInfo";
import SimilarProducts from "../components/productId/SimilarProducts";
import SliderImgs from "../components/productId/SliderImgs";
import './styles/productId.css'

const ProductId = () => {
  const [product, setProduct] = useState();
  
  const { id } = useParams();
  
  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`;
    axios
    .get(URL)
    .then((res) => setProduct(res.data.data.product))
    .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="view__container">
      {
        product &&  <SliderImgs product={product} />
      }
      <ProductInfo product={product} />
      <SimilarProducts product={product} />
    </div>
  );
};

export default ProductId;
