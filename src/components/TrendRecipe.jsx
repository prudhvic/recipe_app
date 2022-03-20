import { useEffect, useState } from "react";
import React from "react";
const TrendRecipe = () => {
  let [vegRecipes, setVegRecipes] = useState([]);
  let fetchRecipe = async () => {
    let recipes = JSON.parse(localStorage.getItem("trendRecipes")) || null;
    if (recipes) {
      setVegRecipes(recipes);
      return;
    }
    try {
      let response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=ecbef30b87f64aba92e0bdccfd050018&number=10`
      );
      let json = await response.json();
      console.log(json);
      localStorage.setItem("trendRecipes", JSON.stringify(json.recipes));
    } catch (err) {
      console.log(err.message);
    }
  };
  console.log(vegRecipes);
  useEffect(() => {
    fetchRecipe();
  }, []);
  return (
    <React.Fragment>
      <h2>Trending recipes</h2>
      <div className="container-recipes">
        {vegRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <div className="overlay"></div>
            <img src={recipe.image} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default TrendRecipe;
