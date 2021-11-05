import { Component } from "react";
import { v4 } from "uuid";
import s from "./ToDoForm.module.scss";

const radio = {
  OPEN: "open",
  CLOSE: "close",
};

const formatDate = (date) => {
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${year}-${month + 1}-${day < 9 ? "0" + day : day}`;
};

class ToDoForm extends Component {
  state = {
    title: "",
    descr: "",
    date: formatDate(new Date()),
    priority: "low",
    agree: false,
    galery: [],
  };

  componentDidMount() {
    console.log("CDM_form");
  }

  getSnapshotBeforeUpdate() {
    console.log("GSBU");
    return {
      scrollHeight: document.documentElement.scrollHeight,
      any: "6544654654",
    };
  }

  // render()

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log("CDU_form");
    if (prevState.agree !== this.state.agree && this.state.agree === false) {
      this.setState({ descr: "CDU" });
      alert("отметтьте согласие с политикой");
    }

    if (prevState.galery !== this.state.galery){
      window.scrollTo({
        top: snapshot.scrollHeight,
      });
    }
    console.log("snapshot :>> ", snapshot);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState !== this.state) {
      return true;
    } else {
      return false;
    }
    // console.log("nextState === this.state :>> ", nextState === this.state);
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    this.setState({ [name]: type === "checkbox" ? checked : value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // if (!this.state.agree) return;
    const item = { ...this.state, id: v4() };
    this.props.addToDo(item);
  };

  render() {
    // for (let i = 0; i < 1000000000; i++) {}
    console.log("RENDER_form");
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          <span> Date </span>
          <input
            className={s.input}
            type="date"
            name="date"
            value={this.state.date}
            onChange={this.handleChange}
          />
        </label>
        <label className={s.label}>
          <span> Title </span>
          <input
            className={s.input}
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </label>
        <label className={s.label}>
          <span> Description </span>
          <input
            className={s.input}
            type="text"
            name="descr"
            value={this.state.descr}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <span>Priority</span>
          <select
            name="priority"
            value={this.state.priority}
            onChange={this.handleChange}
          >
            <option value="low">Low</option>
            <option value="media">Media</option>
            <option value="high">High</option>
          </select>
        </label>
        <label className={s.label}>
          <input
            className={s.input}
            type="checkbox"
            name="agree"
            checked={this.state.agree}
            onChange={this.handleChange}
          />
          <span> Agree with our policy </span>
        </label>
        <button
          disabled={!this.state.agree}
          className={s.btn}
          style={{ backgroundColor: !this.state.agree && "red" }}
          type="submit"
        >
          Ok
        </button>
      </form>
    );
  }
}

export default ToDoForm;

// localStorage.getItem('key')
// localStorage.setItem("key", data)
