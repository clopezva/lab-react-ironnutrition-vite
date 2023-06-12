import FoodBox from "./FoodBox";
import foodsJson from "../foods.json";
import AddFoodForm from "./AddFoodForm";

import { useState } from "react";
import { Card, Row, Col, Button } from "antd";
import Search from "./Search";

export default function FoodList() {
  const [foods, setFoods] = useState([...foodsJson]);
  const [searchValue, setSearchValue] = useState("");

  function handleDelete(id) {
    setFoods(foods.filter((f) => f.id !== id));
  }

  function handleCreateFood(createdFood) {
    //console.log("Nueva comida", createdFood);
    setFoods([createdFood, ...foods]);
  }

  function handleSearchFoods(e) {
    // Cada vez que se ejecuta esta función, es que ha cambiado el valor del input search
    let keyword = e.target.value;
    setSearchValue(keyword);
    console.log(keyword);
    // Utiliza adecuadamente el método filter para actualizar el array de foods que contengan la subcadena de texto de e.target.value
    //const filteredFoods = foods.filter((f) => f.name.includes(keyword));
    const filteredFoods = foodsJson.filter((f) =>
      new RegExp(keyword, "i").test(f.name)
    );
    setFoods(filteredFoods);
  }

  return (
    <>
      <AddFoodForm onCreateFood={handleCreateFood} />
      <Search value={searchValue} onSearchChange={handleSearchFoods} />
      <Row style={{ width: "100%", justifyContent: "center" }}>
        {/** Iterate over the foods array and render a <FoodBox /> component for each individual food item. */}
        {foods.length === 0 ? (
          <h2>No food match search criteria...</h2>
        ) : (
          foods.map((f) => (
            <FoodBox foods={f} key={f.id} onDelete={handleDelete} />
          ))
        )}
      </Row>
    </>
  );
}
