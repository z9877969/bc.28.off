import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToDoFilter from "../components/ToDoFilter/ToDoFilter";
import ToDoForm from "../components/ToDoForm/ToDoForm";
import ToDoList from "../components/ToDoList/ToDoList";
import { PageWrapper } from "../components/_styled/PageWrapper";
import { getTodos } from "../redux/todo/todoOperations";

const ToDoPage = () => {
  const dispatch = useDispatch()
    const isNotTodos = !useSelector(state => state.todos.items).length
  useEffect(() => {
    isNotTodos && dispatch(getTodos())
  }, [])
  return (
    <>
      <PageWrapper isChecked={false}>
        <ToDoForm  />
        <ToDoFilter />
        <ToDoList />
      </PageWrapper>
    </>
  );
};

export default ToDoPage;
