import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import ToDoItem from "../ToDoItem/ToDoItem";
import s from "./ToDoList.module.css";

const ToDoList = () => {
  const { filter, items } = useSelector((state) => state.todos);

  const filterToDoList = () => {
    if (filter === "all") return items;
    return items.filter((item) => item.priority === filter);
  };

  const todos = filterToDoList();

  return items.length > 0 ? (
    <ul className={s.toDoList}>
      {todos.map(({ id, ...item }) => (
        <ToDoItem key={id} {...item} id={id} />
      ))}
    </ul>
  ) : null;
};

export default ToDoList;
