import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

// everything?q=bitcoin&apiKey=42ee593af8484a5a82756cb35b09ccd6

class NewsApi {
  #pageSize = 10;
  #numPages = 1;
  #calcNumPages = (totalItems) => Math.ceil(totalItems / this.pageSize);
  #setParams = (params) =>
    (axios.defaults.params = {
      ...params,
      apiKey: API_KEY,
      pageSize: this.pageSize,
    });

  constructor() {
    axios.defaults.baseURL = "https://newsapi.org/v2/";
  }

  get pageSize() {
    return this.#pageSize;
  }
  set pageSize(value) {
    return (this.#pageSize = value);
  }
  get numPages() {
    return this.#numPages;
  }
  set numPages(numPages) {
    return (this.#numPages = numPages);
  }

  getAllNews = (page = 1) => {
    this.#setParams({ q: "all", page });
    return axios
      .get("everything")
      .then(({ data: { totalResults, articles } }) => {
        this.numPages = this.#calcNumPages(totalResults);
        return articles.map((el, idx) => ({ ...el, id: idx }));
      })
      .catch((err) => console.log("err :>> ", err));
  };

  getNewsByLang = (lang, page = 1) => {
    this.#setParams({ country: lang, page });
    return axios
      .get("top-headlines")
      .then(({ data: { totalResults, articles } }) => {
        this.numPages = this.#calcNumPages(totalResults);
        return articles.map((el, idx) => ({ ...el, id: idx }));
      })
      .catch((err) => console.log("err :>> ", err));
  };
}

const api = new NewsApi();
export default api;
