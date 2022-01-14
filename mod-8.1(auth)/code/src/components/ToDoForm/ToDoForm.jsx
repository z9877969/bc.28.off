import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./ToDoForm.module.css";
import { addTodo, editTodo } from "../../redux/todo/todoOperations";
import { getEditedTodo } from "../../redux/todo/todosSelectors.js";

const ToDoForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.todos.isLoading);
  const editedTodo = useSelector(getEditedTodo);
  const [descr, setDescr] = useState("");
  const [priority, setPriority] = useState("low");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "descr":
        setDescr(value);
        return;
      case "priority":
        setPriority(value);
        return;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = { descr, priority };
    !editedTodo
      ? dispatch(addTodo(todo))
      : dispatch(editTodo({ todo, id: editedTodo.id }));
  };

  useEffect(() => {
    if (editedTodo) {
      setDescr(editedTodo.descr);
      setPriority(editedTodo.priority);
    }
    if(!editedTodo){
      setDescr("");
      setPriority("low");
    }
  }, [editedTodo]);

  // const 

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <span> Description </span>
        <input
          className={s.input}
          type="text"
          name="descr"
          value={descr}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Priority</span>
        <select name="priority" value={priority} onChange={handleChange}>
          <option value="low">Low</option>
          <option value="media">Media</option>
          <option value="high">High</option>
        </select>
      </label>
      <button className={s.btn} type="submit">
        Ok
      </button>
      {isLoading && <h3>Loading...</h3>}
    </form>
  );
};

export default ToDoForm;
