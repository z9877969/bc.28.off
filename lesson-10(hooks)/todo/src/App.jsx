import { useEffect, useState } from "react";
import MainMenu from "./components/MainMenu";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import { menuItems } from "./data";

let i = 0;

const App = () => {
  const [toDoList, setToDoList] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    todos && setToDoList(todos);
    i++;
    console.log("i_[] :>> ", i);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(toDoList));
    i++;
    console.log("i_[todoList] :>> ", i);
  }, [toDoList]);

  useEffect(() => {
    i++;
    console.log("i_[filter] :>> ", i);
  }, [filter]);

  const addToDo = (todo) => {
    // this.setState((prevState) => ({ toDoList: [...prevState.toDoList, item] }));
    setToDoList((prevToDoList) => [...prevToDoList, todo]);
  };

  const removeToDo = (id) =>
    setToDoList((prevToDoList) =>
      prevToDoList.filter((todo) => todo.id !== id)
    );
  // this.setState((prevState) => ({
  //   toDoList: prevState.toDoList.filter((item) => item.id !== id),
  // }));

  const changeFilter = (e) => {
    const { name } = e.target;
    // this.setState({ filter: name });
    setFilter(name);
  };

  const filterToDoList = () => {
    if (filter === "all") return toDoList;
    return toDoList.filter((item) => item.priority === filter);
  };

  const items = filterToDoList();
  console.log("i_beforerender :>> ", i);

  return (
    <div className="App">
      <MainMenu items={menuItems} />
      <ToDoForm addToDo={addToDo} />
      <ul className="filterList">
        <li className="filterItem">
          <button onClick={changeFilter} className="filterBtn" name="all">
            All
          </button>
        </li>
        <li className="filterItem">
          <button onClick={changeFilter} className="filterBtn" name="low">
            Low
          </button>
        </li>
        <li className="filterItem">
          <button onClick={changeFilter} className="filterBtn" name="media">
            Media
          </button>
        </li>
        <li className="filterItem">
          <button onClick={changeFilter} className="filterBtn" name="high">
            High
          </button>
        </li>
      </ul>
      <ToDoList removeToDo={removeToDo} items={items} />
    </div>
  );
};

export default App;
