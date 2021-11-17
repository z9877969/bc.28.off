import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import ToDoFilter from "../components/ToDoFilter/ToDoFilter";
import ToDoForm from "../components/ToDoForm/ToDoForm";
import ToDoList from "../components/ToDoList/ToDoList";
import { PageWrapper } from "../components/_styled/PageWrapper";
import { getTodos } from "../redux/todos/todosOperations";

const ToDoPage = () => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <>
      <PageWrapper isChecked={isChecked}>
        <ToDoForm setIsChecked={setIsChecked} />
        <ToDoFilter />
        <ToDoList />
      </PageWrapper>
    </>
  );
};

export default ToDoPage;
