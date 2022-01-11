import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filter/filterActions";
import s from "./ToDoFilter.module.css";

const ToDoFilter = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => dispatch(changeFilter(e.target.name));

  return (
    <div className={s.container}>
      <h2 className={s.title}>Filter</h2>
      <ul className={s.filterList}>
        <li className={s.filterItem}>
          <button onClick={handleChange} className="filterBtn" name="all">
            All
          </button>
        </li>
        <li className={s.filterItem}>
          <button onClick={handleChange} className="filterBtn" name="low">
            Low
          </button>
        </li>
        <li className={s.filterItem}>
          <button onClick={handleChange} className="filterBtn" name="media">
            Media
          </button>
        </li>
        <li className={s.filterItem}>
          <button onClick={handleChange} className="filterBtn" name="high">
            High
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ToDoFilter;
