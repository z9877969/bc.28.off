import { useEffect, useState } from "react";
import SingleArticle from "../components/SingleArticle/SingleArticle";

// const article = {
//   author: null,
//   title:
//     "Dziwna siła chroni centrum Drogi Mlecznej przed promieniowaniem kosmicznym - Interia",
//   description: "Kliknij i zobacz więcej.",
//   url: "https://geekweek.interia.pl/astronomia/news-dziwna-sila-chroni-centrum-drogi-mlecznej-przed-promieniowan,nId,5635112",
//   urlToImage: "https://i.iplsc.com/-/00097YSBKD7TKGI7-C411.jpg",
//   publishedAt: "2021-11-09T18:01:12Z",
// };

const SingleArticlePage = ({ location, history }) => {
  const [articles, setArticles] = useState([]);
  const [locationToNewsPage, setLocationToNewsPage] = useState("/news");

  const handleGoBack = () => history.push(locationToNewsPage);

  useEffect(() => {
    try {
      const { articles, from: locationToNewsPage } = location.state;
      setArticles(articles);
      setLocationToNewsPage(locationToNewsPage);
    } catch (e) {
      history.push("/not-found");
    }
  }, []);

  return (
    <>
      <button onClick={handleGoBack} type="button">
        GoBack
      </button>
      <SingleArticle articles={articles} />;
    </>
  );
};

export default SingleArticlePage;
