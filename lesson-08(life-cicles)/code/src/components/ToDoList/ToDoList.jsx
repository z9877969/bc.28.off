import PropTypes from "prop-types";
import { Component } from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import s from "./ToDoList.module.scss";

class ToDoList extends Component {

  state = {
    qwe: ""
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('prevState === this.state - list :>> ', prevState === this.state);
  // }

  render() {
    const { items, removeToDo } = this.props;
    
    return (
      <ul className={s.toDoList}>
        {items.map(
          (
            { id, ...item } //{ title, descr, id, date, priority} => {id, date, ...rest} =>
          ) => (
            <ToDoItem
              key={id}
              {...item}
              id={id}
              // title={title}
              // descr={descr}
              // date={date}
              // priority={priority}
              cbRemoveItem={removeToDo}
            />
          )
        )}
      </ul>
    );
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
