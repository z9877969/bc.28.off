import { useEffect, useState } from "react";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";
import api from "../services/newsApi";

const countries = {
  pl: "Polish",
  ua: "Ukranian",
  us: "US",
  ru: "RU",
};

const CountryNewsPage = () => {
  const history = useHistory();
  const { url } = useRouteMatch();
  const { lang } = useParams();

  console.log("lang :>> ", lang);

  const [articles, setArticles] = useState([]);

  const handleOpenNews = (e) => {
    const { lang } = e.target.dataset;
    const newUrl = url.slice(0, -3); // /news/pl
    history.push(`${newUrl}/${lang}`); // /foods/category/id/prod => push(url/prod)
  };

  useEffect(() => {
    api.getNewsByLang(lang).then((articles) => setArticles(articles));
  }, [lang]);

  return (
    <>
      <h1>{countries[lang]} news</h1>
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

export default CountryNewsPage;
