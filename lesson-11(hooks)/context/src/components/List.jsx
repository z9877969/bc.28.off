import { useContext } from "react";
import { BaseContext } from "./BaseProvider";

const List = () => {
  const { items, removeItem } = useContext(BaseContext);
  //   console.log("baseContextValue :>> ", baseContextValue);

  //   const items = [];

  return (
    <ul>
      {items.map((item, i) => (
        <li onClick={() => removeItem(i)} key={i}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
