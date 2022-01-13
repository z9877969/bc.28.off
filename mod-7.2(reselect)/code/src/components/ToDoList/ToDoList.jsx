import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilter,
  getTodos,
  getVisibleTodos,
  getVisibleTodosMemo,
} from "../../redux/todo/todosSelectors";
import { removeTodo } from "../../redux/todo/todoOperations";
import ToDoItem from "../ToDoItem/ToDoItem";
import s from "./ToDoList.module.css";

const ToDoList = ({ changeTheme }) => {
  const dispatch = useDispatch();
  // const visiblesTodos = useSelector(getVisibleTodosMemo);
  const visiblesTodos = useSelector(getVisibleTodos);

  const handleRemoveToDo = (id) => dispatch(removeTodo(id));

  return visiblesTodos.length > 0 ? (
    <ul className={s.toDoList}>
      {visiblesTodos.map(({ id, ...item }) => (
        <ToDoItem key={id} {...item} id={id} cbRemoveItem={handleRemoveToDo} />
      ))}
    </ul>
  ) : null;
};

export default ToDoList;
