import PropTypes from "prop-types";
import { Component } from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import s from "./ToDoList.module.scss";

class ToDoList extends Component {
  render() {
    const { items, removeToDo } = this.props;

    return items.length > 0 ? (
      <ul className={s.toDoList}>
        {items.map(({ id, ...item }) => (
          <ToDoItem key={id} {...item} id={id} cbRemoveItem={removeToDo} />
        ))}
      </ul>
    ) : null;
  }
}
ToDoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeToDo: PropTypes.func.isRequired,
};

export default ToDoList;
