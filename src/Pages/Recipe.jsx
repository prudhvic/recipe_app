import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Recipe.css";
const Recipe = () => {
  let [recipe, setRecipe] = useState({});
  let [activeTab, setActiveTab] = useState("instructions");
  let { id } = useParams();
  let fetchRecipe = async () => {
    try {
      let response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=ecbef30b87f64aba92e0bdccfd050018`
      );
      let json = await response.json();
      console.log("results", json);
      setRecipe(json);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchRecipe();
  }, [id]);
  return (
    <div className="recipe-details">
      <div>
        <h2>{recipe?.title}</h2>
        <img src={recipe.image} />
      </div>
      <div className="info">
        <div className="btns">
          <button
            className={activeTab == "instructions" ? "tab-active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            instructions
          </button>
          <button
            className={activeTab == "ingredients" ? "tab-active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            ingredients
          </button>
        </div>
        {activeTab === "instructions" && (
          <div className="instructions">
            <p dangerouslySetInnerHTML={{ __html: recipe?.summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: recipe?.instructions }}></p>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul className="ingredients">
            {recipe?.extendedIngredients?.map((i) => (
              <li key={i.id}>{i.original}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Recipe;
