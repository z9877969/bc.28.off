import axios from "axios";
const API_KEY = "42ee593af8484a5a82756cb35b09ccd6";
// https://newsapi.org/v2/everything?q=65654&from=2021-10-04&sortBy=publishedAt&apiKey=42ee593af8484a5a82756cb35b09ccd6`

axios.defaults.baseURL = "https://newsapi.org/v2/";
const setParams = (params) =>
  (axios.defaults.params = { apiKey: API_KEY, ...params });

export const getArticles = (query, page = 1) => {
  setParams({
    q: query,
    sortBy: "publishedAt",
    from: "2021-11-04",
    pageSize: 12,
    page,
  });
  return axios
    .get(`everything`)
    .then(({ data }) => data.articles)
    .catch((err) => {
      throw err;
    });
};
