import React from "react";
import LayOut from "../../Components/LayOut/LayOut";
import Carousel from "../../Components/Carousel/CarouselEffect";
import Category from "../../Components/CategoryP/Category";
import Product from "../../Components/ProductP/Product";
function Landing() {
  return (
    <LayOut>
      <Carousel />
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing;
