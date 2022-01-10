import PropTypes from "prop-types";
import s from "./ToDoItem.module.css";

const ToDoItem = ({ descr, priority }) => {
  const removeItem = (id) => console.log("remove item - ", id);

  return (
    <li class={s.toDoItem}>
      <p class={s.descr}>{descr}</p>
      <p class={s.descr}>{priority}</p>
      <button onClick={removeItem} class={s.toDoBtn}>
        Delete
      </button>
    </li>
  );
};

ToDoItem.propTypes = {
  descr: PropTypes.string,
  priority: PropTypes.string,
};

export default ToDoItem;
