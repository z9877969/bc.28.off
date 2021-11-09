import { useState } from "react";
import MainMenu from "./components/MainMenu";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoFilter from "./components/ToDoFilter/ToDoFilter";
import { menuItems } from "./data";

const App = () => {
  const [toDoList, setToDoList] = useState([]);
  const [filter, setFilter] = useState("all");

  const addToDo = (todo) =>
    setToDoList((prevToDoList) => [...prevToDoList, todo]);

  const removeToDo = (id) =>
    setToDoList((prevToDoList) =>
      prevToDoList.filter((todo) => todo.id !== id)
    );

  const changeFilter = (e) => {
    const { name } = e.target;
    setFilter(name);
  };

  const filterToDoList = () => {
    if (filter === "all") return toDoList;
    return toDoList.filter((item) => item.priority === filter);
  };

  const items = filterToDoList();
  return (
    <div className="App">
      <MainMenu items={menuItems} />
      <ToDoForm addToDo={addToDo} />
      <ToDoFilter changeFilter={changeFilter} />
      <ToDoList removeToDo={removeToDo} items={items} />
    </div>
  );
};

export default App;
