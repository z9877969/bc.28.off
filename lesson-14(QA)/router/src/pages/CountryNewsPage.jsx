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
import { PageWrapper } from "../components/_styled/PageWrapper";
import Paginator from "../components/_shared/Paginator/Paginator";

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
    history.push({ pathname: `${newUrl}/${lang}`, search: "?page=1" }); // /foods/category/id/prod => push(url/prod)
  };

  useEffect(() => {
    api.getNewsByLang(lang, page).then((articles) => setArticles(articles));
  }, [lang, page]);

  return (
    <PageWrapper>
      {/* // <div className="mainWrapper"> */}
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
      <Paginator />

      {/* </div> */}
    </PageWrapper>
  );
};

export default CountryNewsPage;
