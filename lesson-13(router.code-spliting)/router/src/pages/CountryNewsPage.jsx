import { useEffect, useState } from "react";
import {
  useHistory,
  useParams,
  useRouteMatch,
  Link,
  useLocation,
} from "react-router-dom";
import queryString from "query-string";
import NewsLangBtns from "../components/NewsLangBtns/NewsLangBtns";
import api from "../services/newsApi";

const countries = {
  pl: "Polish",
  ua: "Ukranian",
  us: "US",
  ru: "RU",
};

const CountryNewsPage = () => {
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();
  const { lang } = useParams();
  const { page } = queryString.parse(location.search);

  const [articles, setArticles] = useState([]);

  const handleOpenNews = (e) => {
    const { lang } = e.target.dataset;
    const newUrl = url.slice(0, -3); // /countries-news/pl
    history.push(`${newUrl}/${lang}`); // /foods/category/id/prod => push(url/prod)
  };

  const handlePagePrev = () => {
    const { page } = queryString.parse(location.search);
    let newPage = Number(page);
    if (newPage === 1) return;
    const search = queryString.stringify({ page: newPage - 1 });
    history.push({ ...location, search });
  };

  const handlePageNext = () => {
    const { page } = queryString.parse(location.search);
    let newPage = Number(page);
    const search = queryString.stringify({ page: newPage + 1 });
    // console.log("search :>> ", search);
    history.push({ ...location, search });
  };

  useEffect(() => {
    !page && history.push({ ...location, search: "?page=1" }); 
    !page && api.getNewsByLang(lang).then((articles) => setArticles(articles));
  }, [lang]);

  useEffect(() => {
    page &&
      api.getNewsByLang(lang, page).then((articles) => setArticles(articles));
  }, [page]);

  return (
    <div className="mainWrapper">
      <h1>{countries[lang]} news</h1>
      <NewsLangBtns handleOpenNews={handleOpenNews} />
      <ul className="articleList">
        {articles.map(({ title, id }) => {
          const locationForSingleArticle = {
            pathname: `/article/${id}`,
            state: { string: "StateString", articles, from: location },
          };
          return (
            <li className="articleItem">
              <Link to={locationForSingleArticle}>{title}</Link>
            </li>
          );
        })}
      </ul>
      <button onClick={handlePagePrev} type="button">
        Prev
      </button>
      <button onClick={handlePageNext} type="button">
        Next
      </button>
    </div>
  );
};

export default CountryNewsPage;
