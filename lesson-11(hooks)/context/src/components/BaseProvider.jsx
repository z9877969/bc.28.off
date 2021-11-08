import { createContext, useState } from "react";

export const BaseContext = createContext();

const BaseProvider = ({ children }) => {
  const [items, setItems] = useState(["items"]);

  const addItem = (item) => setItems((prev) => [...prev, item]);

  const removeItem = (id) =>
    setItems((prev) => prev.filter((el, i) => i !== id));

  return (
    <BaseContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </BaseContext.Provider>
  );
};

export default BaseProvider;
