import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../../redux/todo/todoOperations";
import ToDoItem from "../ToDoItem/ToDoItem";
import s from "./ToDoList.module.css";

const ToDoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);
  const filter = useSelector((state) => state.filter);
  const handleRemoveToDo = (id) => dispatch(removeTodo(id));

  const getItems = () => {
    if (filter === "all") return todos;
    return todos.filter((todo) => todo.priority === filter);
  };

  const items = getItems();

  return items.length > 0 ? (
    <ul className={s.toDoList}>
      {items.map(({ id, ...item }) => (
        <ToDoItem key={id} {...item} id={id} cbRemoveItem={handleRemoveToDo} />
      ))}
    </ul>
  ) : null;
};

export default ToDoList;
