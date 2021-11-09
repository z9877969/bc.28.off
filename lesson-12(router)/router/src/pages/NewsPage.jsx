import { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import api from "../services/newsApi";

const NewsPage = () => {
  const history = useHistory();
  const { url } = useRouteMatch();

  const [articles, setArticles] = useState([]);

  const handleOpenNews = (e) => {
    const { lang } = e.target.dataset;
    history.push(`${url}/${lang}`); // /foods/category/id/prod => push(url/prod)
  };

  useEffect(() => {
    api.getAllNews().then((articles) => setArticles(articles));
  }, []);

  return (
    <>
      <button onClick={() => history.goBack()} type="button">
        GoBack
      </button>
      <button onClick={() => history.goForward()} type="button">
        GoForward
      </button>
      <ul>
        <li>
          <button data-lang="us" onClick={handleOpenNews} type="button">
            US news
          </button>
          <button data-lang="ua" onClick={handleOpenNews} type="button">
            UA news
          </button>
          <button data-lang="ru" onClick={handleOpenNews} type="button">
            RU news
          </button>
          <button data-lang="pl" onClick={handleOpenNews} type="button">
            PL news
          </button>
        </li>
      </ul>
      <ul>
        {articles.map(({ title }) => (
          <li>{title}</li>
        ))}
      </ul>
    </>
  );
};

export default NewsPage;
