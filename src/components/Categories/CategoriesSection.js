import React from "react"
import { useState, useEffect } from "react";
import axios from "axios";
import Categorie from "./Categorie";

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const requestGet = await axios.get(
      process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_CATEGORIES_APP
    );
    const { data } = requestGet;
    setCategories(data.categorias);
    console.log(data.categorias);
  };

  return (
    <div className="Productsection container">
      <ul className="flex justify-center space-x-6">
        {categories.map((categorie, index) => (
          <Categorie key={index} categorie={categorie}></Categorie>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesSection;