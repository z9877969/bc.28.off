import { Component } from "react";
import s from "./Form.module.css";

class Form extends Component {
  state = {
    inputValue: "",
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.cbOnSubmit(this.state.inputValue);
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <input
          className={s.input}
          type="text"
          placeholder="Search..."
          value={this.state.inputValue}
          onChange={this.handleChange}
          onFocus={() => this.setState({ inputValue: "" })}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
