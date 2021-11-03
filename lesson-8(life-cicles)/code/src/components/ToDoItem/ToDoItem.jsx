import PropTypes from "prop-types";
import { Component } from "react";
import s from "./ToDoItem.module.scss";

class ToDoItem extends Component {
  // componentDidMount() {
  //   console.log("CDM_todoItem");
  // }



  // componentDidMount() {
  //   window.addEventListener("keypress", closeByEsc)
  // }
  

  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUnmount() {
    // console.log("CWU");
    // window.removeEventListener("keypress", closeByEsc)
    // alert(" А ты уверен!!??")
  }

  removeItem = () => {
    this.props.cbRemoveItem(this.props.id);
  }; // removeToDo("654654654") ||removeToDo("987987987")
  render() {
    const { title, descr, date, priority } = this.props;
    return (
      <li class={s.toDoItem}>
        <p class={s.date}>{date}</p>
        <h3 class={s.title}>{title}</h3>
        <p class={s.descr}>{descr}</p>
        <p class={s.descr}>{priority}</p>
        <button onClick={this.removeItem} class={s.descr}>
          Delete
        </button>
      </li>
    );
  }
}

// ToDoItem.propTypes = {
//   cbRemoveItem: PropTypes.func.isRequired,
//   title,
//   descr,
//   id,
//   date,
//   priority,
// };

export default ToDoItem;
