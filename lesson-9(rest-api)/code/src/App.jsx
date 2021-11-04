import { Component } from "react";
import { getArticles } from "./service/api";
import "./App.css";
import s from "./news.module.css";
import defaultImg from "./assets/images/default-image.png";
// console.log(process.env.REACT_APP_API_KEY);

class App extends Component {
  state = {
    articles: [], // => []
    error: null,
    isLoading: false,
    query: "all", // => rocket
    inputQuery: "",
    page: 1, // 5 => 1
  };

  // componentDidMount() {
  //   this.setState({ isLoading: true });
  //   getArticles(this.state.query)
  //     .then((articles) => this.setState({ articles: articles }))
  //     .catch((err) => this.setState({ error: err }))
  //     .finally(() => this.setState({ isLoading: false }));
  // }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.query !== prevState.query ||
      this.state.page !== prevState.page
    ) {
      this.getNews();
    }
    // if (this.state.page !== prevState.page && this.state.page !== 1) {
    //   this.getNews();
    // }
  }

  getNews = () => {
    this.setState({ isLoading: true });
    getArticles(this.state.query, this.state.page)
      .then((articles) =>
        this.setState((prev) => ({
          articles: [...prev.articles, ...articles],
        }))
      )
      .catch((err) => this.setState({ error: err }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleChange = (e) => {
    this.setState({ inputQuery: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ query: this.state.inputQuery, page: 1, articles: [] });
  };

  handleChangePage = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <div className="App">
        {this.state.isLoading && <p>Loading...</p>}
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Search..."
            value={this.state.inputQuery}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        {this.state.articles.length > 0 && (
          <ul className={s.news}>
            {this.state.articles.map((item) => (
              <li className={s.item}>
                <img
                  className={s.img}
                  src={item.urlToImage || defaultImg}
                  alt=""
                />
                <div className={s.textWrapper}>
                  <h3 classNames={s.title}>{item.title}</h3>
                  <p className={s.author}>{item.author}</p>
                  <p className={s.date}>{item.publishedAt}</p>
                  <p className={s.descr}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
        {this.state.articles.length%12 === 0 && (
          <button className="btn" type="button" onClick={this.handleChangePage}>
            More
          </button>
        )}
      </div>
    );
  }
}

export default App;
