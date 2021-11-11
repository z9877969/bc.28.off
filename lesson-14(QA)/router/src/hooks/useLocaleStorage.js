import { useEffect, useState } from "react";

export const useLocaleStorage = (key, initialValue) => {
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    const dataFromLS = localStorage.getItem(key);
    dataFromLS && setData(JSON.parse(dataFromLS));
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data]);

  return [data, setData];
};
