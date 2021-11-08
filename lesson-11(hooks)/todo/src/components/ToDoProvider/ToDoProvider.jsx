import { createContext, useContext, useMemo, useState } from "react";

const ToDoContext = createContext();

// console.log("ToDoContext :>> ", ToDoContext);
// const valueFromProvider = useContext(ToDoContext)
export const useToDoContext = () => useContext(ToDoContext);

const ToDoProvider = ({ children }) => {
  const [toDoList, setToDoList] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isShowTimer, setIsShowTimer] = useState(false);
  const [lang, setLang] = useState("en");

  const toggleIsShowTimer = () => setIsShowTimer((prev) => !prev);

  const addToDo = (todo) => {
    setToDoList((prevToDoList) => [...prevToDoList, todo]);
  };

  const removeToDo = (id) =>
    setToDoList((prevToDoList) =>
      prevToDoList.filter((todo) => todo.id !== id)
    );

  const changeFilter = (e) => {
    const { name } = e.target;
    setFilter(name);
  };

  const filterToDoList = () => {
    console.log("filterToDoList");
    if (filter === "all") return toDoList;
    return toDoList.filter((item) => item.priority === filter);
  };

  const items = useMemo(() => filterToDoList(), [filter, toDoList]);

  //   const data = {
  //     toDoList: items,
  //     addToDo,
  //     removeToDo,
  //     changeFilter,
  //   };

  // const totalFeedback = () => {}

  // const total = totalFeedback()

  return (
    <ToDoContext.Provider
      value={{
        toDoList: items,
        addToDo,
        removeToDo,
        changeFilter,
        isShowTimer,
        toggleIsShowTimer,
        lang,
        setLang,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoProvider;
