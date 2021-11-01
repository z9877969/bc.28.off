import { Component, Fragment } from "react";

import styles from "./ToDoList.module.scss";

import { toDoListItems } from "../../data";
import ToDoItem from "./ToDoItem";

class ToDoList extends Component {
  state = {
    items: toDoListItems,
  };

  handleItemRemove = (id) =>
    this.setState((prevState) => {
      return { items: prevState.items.filter((item) => item.id !== id) };
    });

  render() {
    const { items } = this.state;
    return (
      <>
        <ol>
          {items.map((item) => (
            <ToDoItem
              key={item.id}
              cbRemoveItem={this.handleItemRemove}
              item={item}
              styles={styles}
            />
          ))}
        </ol>
      </>
    );
  }
}

export default ToDoList;
