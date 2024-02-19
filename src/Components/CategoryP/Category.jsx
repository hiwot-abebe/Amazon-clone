import React from "react";
import { CategoryInfo } from "./CatergoryInfo";
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css";
function Category() {
  return (
    <section className={classes.category_container}>
      {CategoryInfo.map((infos) => {
        return <CategoryCard data={infos} />;
      })}
    </section>
  );
}

export default Category;
