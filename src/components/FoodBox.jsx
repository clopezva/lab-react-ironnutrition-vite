// Your code here

export default function FoodBox({ foods, onDelete  }) {

  return (
    <>
      <div className="card">
        <p>{foods.name}</p>

        <img src={foods.image} />

        <p>Calories: {foods.calories}</p>
        <p>Servings {foods.servings}</p>

        <p>
          <b>Total Calories: {foods.servings * foods.calories} </b> kcal
        </p>

        <button onClick={() => onDelete(foods.id)}>Delete</button>
      </div>
    </>
  );
}
