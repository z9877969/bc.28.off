import { Component, Fragment } from "react";

import styles from "./ToDoList.module.scss";

// import { toDoListItems } from "../../data";
import ToDoItem from "./ToDoItem";

class ToDoList extends Component {
  static defaultProps = {
    items: [
      {
        id: "def-props",
        name: "Default props",
      },
    ],
    title: "WithoutProps",
    step: 1,
  };

  state = {
    items: this.props.items,
    result: 0,
    step: this.props.step, // 5 || 10 || 15
  };

  handleStepSelect = (e) => {
    const { value } = e.target; // step-5 || step-10 || step-15
    console.log("value :>> ", value);
    this.setState({ step: Number(value) });
    // switch (value) {
    //   case "step-5":
    //     this.setState({ step: 5 });
    //     return;
    //   case "step-10":
    //     this.setState({ step: 10 });
    //     return;
    //   case "step-15":
    //     this.setState({ step: 15 });
    //     return;
    // }
  };

  handleClick = (e) => {
    const { name } = e.target;
    const { step } = this.state;
    this.setState(({ result }) => ({
      result: name === "increment" ? result + step : result - step,
    }));
  };

  handleItemRemove = (id) =>
    this.setState((prevState) => {
      return { items: prevState.items.filter((item) => item.id !== id) };
    });

  render() {
    const { items, step } = this.state;
    const { title } = this.props;
    return (
      <>
        <h2>{title}</h2>
        <ol>
          {items.map((item) => (
            <ToDoItem
              key={item.id}
              cbRemoveItem={this.handleItemRemove}
              item={item}
              styles={styles}
            />
            // <li key={item.id}>
            //   {item.name}
            //   <span className={styles.close}>X</span>
            // </li>
          ))}
        </ol>
        <select name="step" onChange={this.handleStepSelect}>
          <option value="5">Step 5</option>
          <option value="10">Step 10</option>
          <option value="15">Step 15</option>
        </select>
        <button name={"increment"} onClick={this.handleClick} type="button">
          Add {step}
        </button>
        <span>{this.state.result}</span>
        <button name={"decrement"} onClick={this.handleClick} type="button">
          Remove {step}
        </button>
      </>
    );
  }
}

// ToDoList.defaultProps = {
//   items: [],
// };

export default ToDoList;
