import PropTypes from "prop-types";
import { Component } from "react";
import s from "./ToDoItem.module.css";

class ToDoItem extends Component {
  removeItem = () => {
    this.props.cbRemoveItem(this.props.id);
  };

  render() {
    const { title, descr, date, priority } = this.props;
    return (
      <li class={s.toDoItem}>
        <p class={s.date}>{date}</p>
        <h3 class={s.title}>{title}</h3>
        <p class={s.descr}>{descr}</p>
        <p class={s.descr}>{priority}</p>
        <button onClick={this.removeItem} class={s.toDoBtn}>
          Delete
        </button>
      </li>
    );
  }
}

ToDoItem.propTypes = {
  title: PropTypes.string,
  descr: PropTypes.string,
  date: PropTypes.string,
  priority: PropTypes.string,
};

export default ToDoItem;
