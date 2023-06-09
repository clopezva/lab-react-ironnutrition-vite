import FoodBox from "./FoodBox";
import foodsJson from "../foods.json";
import AddFoodForm from "./AddFoodForm";

import { useState } from "react";

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
      <div className="card-container">
        {/** Iterate over the foods array and render a <FoodBox /> component for each individual food item. */}
        {foods.map((f) => (
          <FoodBox foods={f} key={f.id} onDelete={handleDelete} />
        ))}
      </div>
    </>
  );
}
