import { useEffect, useMemo, useState } from "react";
import ToDoFilter from "../components/ToDoFilter/ToDoFilter";
import ToDoForm from "../components/ToDoForm/ToDoForm";
import ToDoList from "../components/ToDoList/ToDoList";
import { PageWrapper } from "../components/_styled/PageWrapper";

const ToDoPage = () => {

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
