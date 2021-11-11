import { useEffect, useMemo, useState } from "react";
import ToDoFilter from "../components/ToDoFilter/ToDoFilter";
import ToDoForm from "../components/ToDoForm/ToDoForm";
import ToDoList from "../components/ToDoList/ToDoList";
import { PageWrapper } from "../components/_styled/PageWrapper";
import { useCrud } from "../hooks/useCrud";

const ToDoPage = () => {
  const crud = useCrud("todo", []);
  const [filter, setFilter] = useState("all");
  const [isChecked, setIsChecked] = useState(false);

  const changeFilter = (e) => {
    const { name } = e.target;
    setFilter(name);
  };

  const filterToDoList = () => {
    console.log("filterToDoList");
    if (filter === "all") return crud.data;
    return crud.data.filter((item) => item.priority === filter);
  };

  const items = useMemo(() => {
    return filterToDoList();
  }, [crud.data, filter]);
  return (
    <>
      <PageWrapper isChecked={isChecked}>
        {/* <PageWrapper className={isChecked ? s.isChecked : s.isChecked}> */}
        <ToDoForm addToDo={crud.create} setIsChecked={setIsChecked} />
        <ToDoFilter changeFilter={changeFilter} />
        <ToDoList removeToDo={crud.remove} items={items} />
      </PageWrapper>
    </>
  );
};

export default ToDoPage;
