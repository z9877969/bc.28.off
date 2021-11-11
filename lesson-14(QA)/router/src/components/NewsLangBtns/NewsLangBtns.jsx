import s from "./NewsLangBtns.module.css";

const NewsLangBtns = ({handleOpenNews}) => {
  return (
    <ul className={s.langList}>
      <li className={s.langItem}>
        <button
          className={s.langBtn}
          data-lang="us"
          onClick={handleOpenNews}
          type="button"
        >
          US news
        </button>
      </li>
      <li className={s.langItem}>
        <button
          className={s.langBtn}
          data-lang="ua"
          onClick={handleOpenNews}
          type="button"
        >
          UA news
        </button>
      </li>
      <li className={s.langItem}>
        <button
          className={s.langBtn}
          data-lang="ru"
          onClick={handleOpenNews}
          type="button"
        >
          RU news
        </button>
      </li>
      <li className={s.langItem}>
        <button
          className={s.langBtn}
          data-lang="pl"
          onClick={handleOpenNews}
          type="button"
        >
          PL news
        </button>
      </li>
    </ul>
  );
};

export default NewsLangBtns;
