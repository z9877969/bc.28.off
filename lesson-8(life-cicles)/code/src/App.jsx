import MainMenu from "./components/MainMenu";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import { menuItems, toDoListItems } from "./data";
import { Component } from "react";

class App extends Component {
  state = {
    toDoList: [], // []
    filter: "all",
  };

  componentDidMount() {
    const toDo = JSON.parse(localStorage.getItem("toDo"));
    console.log("CDM_App");
    if (toDo) {
      this.setState({ toDoList: toDo });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("CDU_App");
    if (prevState.toDoList !== this.state.toDoList) {
      localStorage.setItem("toDo", JSON.stringify(this.state.toDoList));
    }
    if (prevState.toDoList !== this.state.toDoList) {
      this.setState({ filter: "test" });
    }
    if (
      prevState.filter !== this.state.filter &&
      this.state.filter === "high"
    ) {
      for (let i = 0; i < 1000000000; i++) {}
    }
  }

  addToDo = (item) => {
    this.setState((prevState) => ({ toDoList: [...prevState.toDoList, item] }));
  };

  removeToDo = (id) =>
    this.setState((prevState) => ({
      toDoList: prevState.toDoList.filter((item) => item.id !== id),
    }));

  changeFilter = (e) => {
    const { name } = e.target;
    this.setState({ filter: name });
  };

  filterToDoList = () => {
    const { filter, toDoList } = this.state;
    if (filter === "all") return toDoList;
    return toDoList.filter((item) => item.priority === filter);
  };

  render() {
    console.log("RENDER_App");
    const items = this.filterToDoList();
    return (
      <div className="App">
        <MainMenu items={menuItems} />
        <ToDoForm addToDo={this.addToDo} />
        <ul class="filterList">
          <li class="filterItem">
            <button onClick={this.changeFilter} class="filterBtn" name="all">
              All
            </button>
          </li>
          <li class="filterItem">
            <button onClick={this.changeFilter} class="filterBtn" name="low">
              Low
            </button>
          </li>
          <li class="filterItem">
            <button onClick={this.changeFilter} class="filterBtn" name="media">
              Media
            </button>
          </li>
          <li class="filterItem">
            <button onClick={this.changeFilter} class="filterBtn" name="high">
              High
            </button>
          </li>
        </ul>
        <ToDoList removeToDo={this.removeToDo} items={items} />
      </div>
    );
  }
}

export default App;
