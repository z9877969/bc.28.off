import MainMenu from "./components/MainMenu";
import ToDoList from "./components/ToDoList";
import { menuItems, toDoListItems } from "./data";

const App = () => {
  return (
    <div className="App">
      <MainMenu items={menuItems} />
      <ToDoList items={toDoListItems} />
    </div>
  );
};

export default App;
