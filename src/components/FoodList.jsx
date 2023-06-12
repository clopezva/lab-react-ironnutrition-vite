import FoodBox from "./FoodBox";
import foodsJson from "../foods.json";
import AddFoodForm from "./AddFoodForm";

import { useState } from "react";
import { Card, Row, Col, Button } from "antd";
import Search from "./Search";

export default function FoodList() {
  const [foods, setFoods] = useState([...foodsJson]);

  function handleDelete(id) {
    setFoods(foods.filter((f) => f.id !== id));
  }

  function handleCreateFood(createdFood) {
    //console.log("Nueva comida", createdFood);
    setFoods([createdFood, ...foods]);
  }
  return (
    <>
      <AddFoodForm onCreateFood={handleCreateFood} />
      <Search />
      <Row style={{ width: "100%", justifyContent: "center" }}>
        {/** Iterate over the foods array and render a <FoodBox /> component for each individual food item. */}
        {foods.map((f) => (
          <FoodBox foods={f} key={f.id} onDelete={handleDelete} />
        ))}
      </Row>
    </>
  );
}
