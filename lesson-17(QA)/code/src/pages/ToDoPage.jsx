import { useState } from "react";
import ToDoFilter from "../components/ToDoFilter/ToDoFilter";
import ToDoForm from "../components/ToDoForm/ToDoForm";
import ToDoList from "../components/ToDoList/ToDoList";
import { PageWrapper } from "../components/_styled/PageWrapper";

const ToDoPage = () => {
  const [isChecked, setIsChecked] = useState(false);

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
