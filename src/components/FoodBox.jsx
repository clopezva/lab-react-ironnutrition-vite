// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Card, Col, Button } from "antd";

function FoodBox({ foods, onDelete }) {
  return (
    <Col>
      <Card
        title={foods.name}
        style={{
          width: 230,
          height: 300,
          margin: 10,
        }}
      >
        <img src={foods.image} height={60} alt={foods.name} />
        <p>Calories: {foods.calories}</p>
        <p>Servings {foods.servings}</p>
        <p>
          <b>Total Calories: {foods.calories * foods.servings}</b> kcal
        </p>
        <Button type="primary" onClick={() => onDelete(foods.id)}>
          {" "}
          Delete{" "}
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
