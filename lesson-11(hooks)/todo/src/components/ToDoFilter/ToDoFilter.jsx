import { useToDoContext } from "../ToDoProvider/ToDoProvider";

const ToDoFilter = () => {
  const { changeFilter } = useToDoContext();

  return (
    <ul className="filterList">
      <li className="filterItem">
        <button onClick={changeFilter} className="filterBtn" name="all">
          All
        </button>
      </li>
      <li className="filterItem">
        <button onClick={changeFilter} className="filterBtn" name="low">
          Low
        </button>
      </li>
      <li className="filterItem">
        <button onClick={changeFilter} className="filterBtn" name="media">
          Media
        </button>
      </li>
      <li className="filterItem">
        <button onClick={changeFilter} className="filterBtn" name="high">
          High
        </button>
      </li>
    </ul>
  );
};

export default ToDoFilter;
