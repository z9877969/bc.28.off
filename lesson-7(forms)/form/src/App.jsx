import MainMenu from "./components/MainMenu";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import { menuItems, toDoListItems } from "./data";
import { Component } from "react";

class App extends Component {
  state = {
    toDoList: [],
  };

  addToDo = (item) => {
    this.setState((prevState) => ({ toDoList: [...prevState.toDoList, item] }));
  };

  removeToDo = (id) =>
    this.setState((prevState) => ({
      toDoList: prevState.toDoList.filter((item) => item.id !== id),
    }));

  render() {
    return (
      <div className="App">
        <MainMenu items={menuItems} />
        <ToDoForm addToDo={this.addToDo} />
        <ToDoList removeToDo={this.removeToDo} items={this.state.toDoList} />
      </div>
    );
  }
}

export default App;
