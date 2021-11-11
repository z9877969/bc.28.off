import { useEffect, useState, lazy, Suspense } from "react";
import { useHistory, useRouteMatch, Route, Link } from "react-router-dom";
import NewsLangBtns from "../components/NewsLangBtns/NewsLangBtns";
// import SingleArticle from "../components/SingleArticle/SingleArticle";
import api from "../services/newsApi";

// import SingleArticle from "../components/SingleArticle/SingleArticle";

const SingleArticle = lazy(() =>
  import(
    "../components/SingleArticle/SingleArticle" /* webpackChunkName: "single-article-componenent" */
  )
);

const NewsPage = () => {
  const history = useHistory();
  const { url } = useRouteMatch();

  const [articles, setArticles] = useState([]);

  const handleOpenNews = (e) => {
    const { lang } = e.target.dataset;
    history.push({ pathname: `/country-news/${lang}`, search: "?page=1" });
  };

  useEffect(() => {
    api.getAllNews().then((articles) => setArticles(articles));
  }, []);

  return (
    <>
      <button onClick={() => history.goBack()} type="button">
        GoBack
      </button>
      <NewsLangBtns handleOpenNews={handleOpenNews} />
      <ul className="articleList">
        {articles.map(({ title, id }) => (
          <li className="articleItem">
            <Link to={`/news/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <Suspense>
        <Route path="/news/:articleId">
          {articles.length > 0 && <SingleArticle articles={articles} />}
        </Route>
      </Suspense>
    </>
  );
};

export default NewsPage;
