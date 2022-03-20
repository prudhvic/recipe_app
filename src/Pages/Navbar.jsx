import React, { useState } from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  let navigate = useNavigate();
  let [searchQuery, setSearchQuery] = useState("");
  let submitForm = (e) => {
    e.preventDefault();
    navigate(`/search/${searchQuery}`);
  };
  return (
    <header>
      <h1>
        <IoFastFoodOutline />
        <Link to="/">Cuisine Culture.</Link>
      </h1>
      <form onSubmit={submitForm}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="seach for recipe"
        />
      </form>
    </header>
  );
};

export default Navbar;
