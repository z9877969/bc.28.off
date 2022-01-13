import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToDoFilter from "../components/ToDoFilter/ToDoFilter";
import ToDoForm from "../components/ToDoForm/ToDoForm";
import ToDoList from "../components/ToDoList/ToDoList";
import { PageWrapper } from "../components/_styled/PageWrapper";
import { getTodos } from "../redux/todo/todoOperations";
import { options, changeLang } from "../redux/lang/langSlice";
import { getLang } from "../redux/lang/langSelectors";

const ToDoPage = () => {
  const dispatch = useDispatch();
  const isNotTodos = !useSelector((state) => state.todos.items).length;
  const lang = useSelector(getLang);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    isNotTodos && dispatch(getTodos());
  }, []);

  return (
    <>
      <PageWrapper isChecked={isChecked}>
        <button type="button" onClick={() => setIsChecked((prev) => !prev)}>
          Change theme
        </button>
        <select
          name="lang"
          value={lang}
          onChange={(e) => dispatch(changeLang(e.target.value))}
        >
          {options.map(({ title, value }) => (
            <option value={value}>{title}</option>
          ))}
        </select>
        <ToDoForm />
        <ToDoFilter />
        <ToDoList />
      </PageWrapper>
    </>
  );
};

export default ToDoPage;
