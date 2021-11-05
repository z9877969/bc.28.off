import { Component } from "react";
import Form from "./components/Form/Form";
import NewsList from "./components/NewsList/NewsList";
import "./App.css";
// console.log(process.env.REACT_APP_API_KEY);

class App extends Component {
  state = {
    query: "all",
  };

  changeQuery = (query) => {
    this.setState({ query });
  };

  render() {
    const { query } = this.state;
    // if(err) return <h1>{err}</h1>

    return (
      <div className="App">
        {this.state.isLoading && <p>Loading...</p>}
        <Form cbOnSubmit={this.changeQuery} />
        <NewsList query={query} />
      </div>
    );
  }
}

export default App;
