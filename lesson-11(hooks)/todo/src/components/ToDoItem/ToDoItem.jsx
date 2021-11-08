import PropTypes from "prop-types";
import { Component } from "react";
import { useToDoContext } from "../ToDoProvider/ToDoProvider";
import s from "./ToDoItem.module.scss";

const ToDoItem = ({ title, descr, date, priority, id }) => {
  const { removeToDo } = useToDoContext();

  return (
    <li class={s.toDoItem}>
      <p class={s.date}>{date}</p>
      <h3 class={s.title}>{title}</h3>
      <p class={s.descr}>{descr}</p>
      <p class={s.descr}>{priority}</p>
      <button onClick={() => removeToDo(id)} class={s.descr}>
        Delete
      </button>
    </li>
  );
};

// ToDoItem.propTypes = {
//   cbRemoveItem: PropTypes.func.isRequired,
//   title,
//   descr,
//   id,
//   date,
//   priority,
// };

export default ToDoItem;
