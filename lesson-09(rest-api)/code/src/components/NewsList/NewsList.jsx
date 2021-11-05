import { Component } from "react";
import Button from "../Button/Button";
import { getArticles } from "../../service/api";
import s from "./NewsList.module.css";
import defaultImg from "../../assets/images/default-image.png";

class NewsList extends Component {
  state = {
    articles: [], // => [321,321,321]
    isLoading: false,
    error: null,
    page: 1, // => 5
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.query !== prevProps.query && this.state.page === 1) {
      this.getNews();
    }
    if (this.state.page !== prevState.page) {
      this.getNews();
    }
    if (this.props.query !== prevProps.query && this.state.page !== 1) {
      this.setState({ page: 1, articles: [] });
    }
  }

  handleChangePage = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  getNews = () => {
    this.setState({ isLoading: true });
    getArticles(this.props.query, this.state.page)
      .then((articles) =>
        this.setState((prev) => ({
          articles: [...prev.articles, ...articles],
        }))
      )
      .catch((err) => this.setState({ error: err }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    return (
      <>
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
        {this.state.articles.length !== 0 &&
          this.state.articles.length % 12 === 0 && (
            <Button cbOnClick={this.handleChangePage} />
          )}
      </>
    );
  }
}

export default NewsList;
