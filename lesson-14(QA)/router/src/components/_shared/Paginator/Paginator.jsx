import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
import s from "./Paginator.module.css";

const Paginator = () => {
  const location = useLocation();
  const { push } = useHistory();
  const { page } = queryString.parse(location.search);

  const changeLocation = (curPage) => {
    const qs = queryString.stringify({ page: curPage });
    push({ ...location, search: qs });
  };

  const handleChangePage = ({ target }) => {
    const { active } = target.dataset;
    switch (active) {
      case "prev":
        if (page === "1") return;
        const curPage = Number(page) - 1;
        return changeLocation(curPage);
      case "next":
        return changeLocation(Number(page) + 1);
      default:
        return;
    }
  };

  return (
    <div className={s.container}>
      <button
        className={s.btn}
        data-active="prev"
        onClick={handleChangePage}
        type="button"
      >
        Prev
      </button>
      <button
        className={s.btn}
        data-active="next"
        onClick={handleChangePage}
        type="button"
      >
        Next
      </button>
    </div>
  );
};

export default Paginator;
