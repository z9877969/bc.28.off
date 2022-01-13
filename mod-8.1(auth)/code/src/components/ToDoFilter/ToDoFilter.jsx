import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filter/filterActions";
import { getLang } from "../../redux/lang/langSelectors";
import s from "./ToDoFilter.module.css";

const filterLangOptions = {
  btns: {
    all: {
      ru: "Все",
      en: "All",
    },
    low: {
      ru: "Низкий",
      en: "Low",
    },
    media: {
      ru: "Средний",
      en: "Media",
    },
    high: {
      ru: "Высокий",
      en: "High",
    },
  },
};

const ToDoFilter = () => {
  const dispatch = useDispatch();
  const lang = useSelector(getLang);
  const { btns } = filterLangOptions;
  const handleChange = (e) => dispatch(changeFilter(e.target.name));

  return (
    <div className={s.container}>
      <h2 className={s.title}>Filter</h2>
      <ul className={s.filterList}>
        <li className={s.filterItem}>
          <button onClick={handleChange} className="filterBtn" name="all">
            {btns.all[lang]}
          </button>
        </li>
        <li className={s.filterItem}>
          <button onClick={handleChange} className="filterBtn" name="low">
            {btns.low[lang]}
          </button>
        </li>
        <li className={s.filterItem}>
          <button onClick={handleChange} className="filterBtn" name="media">
            {btns.media[lang]}
          </button>
        </li>
        <li className={s.filterItem}>
          <button onClick={handleChange} className="filterBtn" name="high">
            {btns.high[lang]}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ToDoFilter;
