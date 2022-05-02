import React from "react";
import Tab from "../components/Tab";
import TrendRecipe from "../components/TrendRecipe";
import VegRecipe from "../components/VegRecipe";

const Home = () => {
  return (
    <div>
      <TrendRecipe />
      <VegRecipe />
    </div>
  );
};

export default Home;
