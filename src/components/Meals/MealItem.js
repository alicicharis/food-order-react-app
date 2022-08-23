import { useDispatch } from "react-redux";

import classes from "./MealItem.module.css";
import { displayActions } from "../../store/display";

const MealItem = (props) => {
  const dispatch = useDispatch();
  const { image, name, id, price, description } = props;

  const item = {
    id,
    image,
    name,
    description,
    price,
  };

  const viewHandler = () => {
    dispatch(displayActions.displayItem(item));
  };

  return (
    <div className={classes.card}>
      <img className={classes.img} src={image} alt={name} />
      <h2>{name}</h2>
      <h3>${price}</h3>
      <button onClick={viewHandler} className={classes.btn}>
        View
      </button>
    </div>
  );
};

export default MealItem;
