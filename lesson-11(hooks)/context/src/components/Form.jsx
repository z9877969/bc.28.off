import { useContext, useState } from "react";
import { BaseContext } from "./BaseProvider";

const Form = () => {
  const [input, setInput] = useState("");

  const { addItem } = useContext(BaseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Ok</button>
    </form>
  );
};

export default Form;
