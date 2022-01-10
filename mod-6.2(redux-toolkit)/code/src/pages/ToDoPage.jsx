import { useEffect, useMemo, useState } from "react";
import ToDoFilter from "../components/ToDoFilter/ToDoFilter";
import ToDoForm from "../components/ToDoForm/ToDoForm";
import ToDoList from "../components/ToDoList/ToDoList";
import { PageWrapper } from "../components/_styled/PageWrapper";

const ToDoPage = () => {
  const [todo, setTodo] = useState(
    () => JSON.parse(localStorage.getItem("todo")) || []
  );
  const [filter, setFilter] = useState("all");

  const addTodo = (todo) => setTodo((prev) => [...prev, todo]);
  const removeTodo = (id) =>
    setTodo((prev) => prev.filter((todo) => todo.id !== id));

  const changeFilter = (e) => {
    const { name } = e.target;
    setFilter(name);
  };

  const filterToDoList = () => {
    if (filter === "all") return todo;
    return todo.filter((item) => item.priority === filter);
  };

  // const items = useMemo(() => {
  //         return filterToDoList();
  // }, [todo, filter]);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      <PageWrapper isChecked={false}>
        <ToDoForm addToDo={addTodo} />
        <ToDoFilter changeFilter={changeFilter} />
        <ToDoList removeToDo={removeTodo} items={[]} />
      </PageWrapper>
    </>
  );
};

export default ToDoPage;
