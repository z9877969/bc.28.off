import "./App.css";
import BaseProvider from "./components/BaseProvider";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <BaseProvider>
        <Form />
        <List />
      </BaseProvider>
    </div>
  );
}

export default App;
