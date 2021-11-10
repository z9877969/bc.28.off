import { useParams } from "react-router-dom";
import s from "./SingleArticle.module.css";

const SingleArticle = ({ articles = [] }) => {
  const { articleId } = useParams();

  const article = articles.find(({ id }) => id === Number(articleId)) || {};

  return (
    <article className={s.articleWrapper}>
      <h1>SingleArticle</h1>
      <img className={s.articleImg} src={article.urlToImage} alt="" />
      <div className={s.descrWrapper}>
        <p className={s.title}>{article.title}</p>
        <p className={s.author}>
          {article.author ? article.author : "Amazing Author"}
        </p>
        <p className={s.description}>{article.description}</p>
        <p className={s.date}>{article.publishedAt}</p>
      </div>
    </article>
  );
};

export default SingleArticle;
