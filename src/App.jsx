import "./App.css";
import FoodBox from "./components/FoodBox";
import foodsJson from "./foods.json";
import { useState } from "react";

function App() {
  const [foods, setFoods] = useState([...foodsJson]);

  function handleDelete(id) {
    setFoods(foods.filter((f) => f.id !== id));
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <div className="card-container">
        {/** Iterate over the foods array and render a <FoodBox /> component for each individual food item. */}
        {foods.map((f) => (
          <FoodBox foods={f} key={f.id} onDelete={handleDelete}/>
        ))}
      </div>
    </div>
  );
}

export default App;
