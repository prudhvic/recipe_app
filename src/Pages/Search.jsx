import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
const Search = () => {
  let [recipes, setRecipes] = useState([]);
  let { name } = useParams();
  let fetchRecipe = async () => {
    try {
      let response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=ecbef30b87f64aba92e0bdccfd050018&number=10&query=${name}`
      );
      let json = await response.json();
      console.log("results", json);
      setRecipes(json.results);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchRecipe();
  }, [name]);
  console.log(name);
  return (
    <div>
      <div className="container-recipes grid-items">
        {recipes.map((recipe) => (
          <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
            <h3>{recipe.title}</h3>
            <div className="overlay"></div>
            <img src={recipe.image} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
