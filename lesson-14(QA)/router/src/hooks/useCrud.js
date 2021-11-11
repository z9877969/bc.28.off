import { useLocaleStorage } from "./useLocaleStorage";

export const useCrud = (key, initialValue) => {
  const [data, setData] = useLocaleStorage(key, initialValue);

  const create = (item) => setData((prev) => [...prev, item]);
  const remove = (id) =>
    setData((prev) => prev.filter((item) => item.id !== id));
  const update = (updatedItem) =>
    setData((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );

  return { data, create, remove, update };
};

// const crud = useCrud("someKey", []);

// crud.remove();
// crud.update();
