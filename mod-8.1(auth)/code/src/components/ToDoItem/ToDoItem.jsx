import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import s from "./ToDoItem.module.css";
import { openEditedTodo } from "../../redux/todo/todoReducer";

const ToDoItem = ({ descr, id, priority, cbRemoveItem }) => {
  const dispatch = useDispatch();
  const removeItem = () => cbRemoveItem(id);

  return (
    <li className={s.toDoItem}>
      <p className={s.descr}>{descr}</p>
      <p className={s.descr}>{priority}</p>
      <button
        onClick={() => dispatch(openEditedTodo({ descr, id, priority }))}
        className={s.toDoBtn}
      >
        Edit
      </button>
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
