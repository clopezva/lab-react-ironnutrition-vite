// Your code here

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddFoodForm({ onCreateFood }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState(1);

  function handleClick(e) {
    e.preventDefault();
    // We need to create a new object of the type of food.
    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
      id: uuidv4(),
    };
    onCreateFood(newFood);
  }

  return (
    <>
      <form action="" onSubmit={handleClick} className="form-container">
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          value={name}
          maxLength={50}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label htmlFor="image">Image: </label>
        <input
          id="image"
          type="url"
          name="image"
          required
          value={image}
          onChange={(e) => setImage(e.target.value)}
        ></input>
        <label htmlFor="calories">Calories: </label>
        <input
          id="calories"
          type="number"
          name="calories"
          min={0}
          max={10000}
          required
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        ></input>
        <label htmlFor="servings">Servings: </label>
        <input
          id="servings"
          type="number"
          name="servings"
          min={0}
          max={10000}
          required
          value={servings}
          onChange={(e) => setServings(e.target.value)}
        ></input>
        <button>Create</button>
      </form>
    </>
  );
}
