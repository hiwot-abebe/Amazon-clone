import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
import {productUrl} from '../../Api/endpoints'
import Loader from "../Loader/Loader";

function Product() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoding]=useState(false)
  useEffect(() => {
    setIsLoding(true)
    axios.get(`${productUrl}/products`)
      .then((res) => {
        setProducts(res.data);
        setIsLoding(false)
      })
      .catch((err) => {
        console.log(err);
        setIsLoding(false)
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.products_container}>
          {products?.map((singleProduct) => {
            return (<ProductCard renderAdd={true} product={singleProduct} />)
          })}
        </section>
      )}
    </>
  );
}

export default Product;
