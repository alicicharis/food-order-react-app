import classes from "./MealsList.module.css";
import image from "../../assets/food1.jpg";
import MealItem from "./MealItem";

const DUMMY_MEALS = [
  {
    id: 1,
    name: "Vegy Chicken",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not",
    price: 19.99,
    image,
  },
  {
    id: 2,
    name: "Vegy Chicken",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not",
    price: 19.99,
    image,
  },
  {
    id: 3,
    name: "Vegy Chicken",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not",
    price: 19.99,
    image,
  },
  {
    id: 4,
    name: "Vegy Chicken",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not",
    price: 19.99,
    image,
  },
];

const MealsList = () => {
  return (
    <div className={classes.container}>
      {DUMMY_MEALS.map((item) => (
        <MealItem
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default MealsList;
