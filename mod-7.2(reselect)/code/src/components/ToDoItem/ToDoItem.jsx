import PropTypes from "prop-types";
import s from "./ToDoItem.module.css";

const ToDoItem = ({ descr, id, priority, cbRemoveItem }) => {
  const removeItem = () => cbRemoveItem(id);

  return (
    <li className={s.toDoItem}>
      <p className={s.descr}>{descr}</p>
      <p className={s.descr}>{priority}</p>
      <button onClick={removeItem} className={s.toDoBtn}>
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
