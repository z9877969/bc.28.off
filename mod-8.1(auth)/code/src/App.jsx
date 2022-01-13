import { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/Nav/Nav";

const HomePage = lazy(() =>
  import("./pages/HomePage" /* webpackChunkName: "home-page" */)
);
const ToDoPage = lazy(() =>
  import("./pages/ToDoPage" /* webpackChunkName: "todo-page" */)
);
const CounterPage = lazy(() =>
  import("./pages/CounterPage" /* webpackChunkName: "todo-page" */)
);

const App = () => {
  const title = "Home Page";

  return (
    <div className="App">
      <Nav />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage title={title} />
          </Route>
          <Route path="/counter" component={CounterPage} />
          <Route path="/todo" component={ToDoPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
