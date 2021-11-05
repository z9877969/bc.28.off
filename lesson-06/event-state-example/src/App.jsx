import MainMenu from "./components/MainMenu";
import ToDoList from "./components/ToDoList";

import "./App.css";

import { menuItems, toDoListItems } from "./data";

// const Test = ({ title }) => <h1>{title}</h1>;

function App() {
  return (
    <div className="App">
      <MainMenu items={menuItems} />
      {/* <Test title="JSX" />
      {Test({ title: "JS" })} */}
      <ToDoList step={5} items={toDoListItems} title="withProps" />
      <ToDoList step={10} />
    </div>
  );
}

export default App;
