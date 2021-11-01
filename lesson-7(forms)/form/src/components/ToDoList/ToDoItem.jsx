const Button = ({ cbOnClick, styles }) => {
  return (
    <button onClick={cbOnClick} className={styles.close}>
      X
    </button>
  );
};

const ToDoItem = ({ cbRemoveItem, item, styles }) => {
  const removeItem = () => cbRemoveItem(item.id);
  return (
    <li>
      {item.name} <Button styles={styles} cbOnClick={removeItem} />
    </li>
  );
};

export default ToDoItem;

// list
//     item
//         button => onClick || onChange || onSubmit
