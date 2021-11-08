import PropTypes from "prop-types";
import { memo } from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import { useToDoContext } from "../ToDoProvider/ToDoProvider";
import s from "./ToDoList.module.scss";

const ToDoList = () => {
  const { toDoList } = useToDoContext();

  console.log("ToDoList");

  return (
    <ul className={s.toDoList}>
      {toDoList.map(({ id, ...item }) => (
        <ToDoItem key={id} {...item} id={id} />
      ))}
    </ul>
  );
};

export default memo(ToDoList);
