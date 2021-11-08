import { useEffect, useMemo, useRef, useState, memo, useCallback } from "react";
import MainMenu from "./components/MainMenu";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import Timer, { getTime } from "./components/Timer/Timer";
import ToDoFilter from "./components/ToDoFilter/ToDoFilter";
import FromAsyncRequest from "./components/FromAsyncRequest/FromAsyncRequest";
import { menuItems } from "./data";
import { useToDoContext } from "./components/ToDoProvider/ToDoProvider";

const getNumber = (val) => {
  let i = 0;
  while (i < 10000000) {
    i++;
  }
  return val * 2;
};

const Button = memo(({ increment, value }) => {
  const [isOdd, setIsOdd] = useState(value % 2 !== 0);
  console.log("Button");

  useEffect(() => {
    setIsOdd(value % 2 !== 0);
  }, [value, increment]);

  return (
    <button
      style={{ backgroundColor: isOdd ? "red" : "green" }}
      onClick={increment}
      type="button"
    >
      increase
    </button>
  );
});

const App = () => {
  const [isShowTimer, setIsShowTimer] = useState(false);
  const [value, setValue] = useState(0);

  // const { isShowTimer, toggleIsShowTimer } = useToDoContext();
  const toggleIsShowTimer = () => setIsShowTimer((prev) => !prev);

  const increment = useCallback(() => setValue((prev) => prev + 1), []);

  const number = useMemo(() => value * 2, [value]);

  const getCollectionApi = useCallback(() => {
    console.log("start_request");
    return Promise.resolve(
      Array(value) // 1 => 2 => 3
        .fill("")
        .map((el, idx) => idx + 1)
    );
  }, [value]);

  return (
    <div className="App">
      <MainMenu items={menuItems} />
      <ToDoForm />
      <ToDoFilter />
      <ToDoList />
      {isShowTimer ? <Timer /> : <h1>Timer close</h1>}
      <button onClick={toggleIsShowTimer} type="button">
        {isShowTimer ? "close" : "open"}
      </button>
      <h1>Some number: {number}</h1>
      <Button increment={increment} value={value}  />
      <FromAsyncRequest getCollectionApi={getCollectionApi} />
    </div>
  );
};

export default App;
