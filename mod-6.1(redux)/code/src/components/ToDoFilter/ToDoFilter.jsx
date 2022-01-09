import s from "./ToDoFilter.module.css";

const ToDoFilter = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Filter</h2>
      <ul className={s.filterList}>
        <li className={s.filterItem}>
          <button
            onClick={() => console.log("run changeFilterFn")}
            className="filterBtn"
            name="all"
          >
            All
          </button>
        </li>
        <li className={s.filterItem}>
          <button
            onClick={() => console.log("run changeFilterFn")}
            className="filterBtn"
            name="low"
          >
            Low
          </button>
        </li>
        <li className={s.filterItem}>
          <button
            onClick={() => console.log("run changeFilterFn")}
            className="filterBtn"
            name="media"
          >
            Media
          </button>
        </li>
        <li className={s.filterItem}>
          <button
            onClick={() => console.log("run changeFilterFn")}
            className="filterBtn"
            name="high"
          >
            High
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ToDoFilter;
