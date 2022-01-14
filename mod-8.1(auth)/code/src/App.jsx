import { useEffect } from "react";
import { Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import AuthPage from "./pages/AuthPage";
import { getCurUser } from "./redux/auth/authOperations";
import { getIsAuth, getIsToken } from "./redux/auth/authSelectors";

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
  const dispatch = useDispatch();
  const isToken = useSelector(getIsToken);
  const isAuth = useSelector(getIsAuth);
  const title = "Home Page";

  useEffect(() => {
    isToken && dispatch(getCurUser());
  }, []);

  return (
    <div className="App">
      <Nav />
      <Suspense fallback={<h1>Loading...</h1>}>
        {isAuth ? (
          <Switch>
            <Route path="/" exact>
              <HomePage title={title} />
            </Route>
            <Route path="/counter" component={CounterPage} />
            <Route path="/todo" component={ToDoPage} />
            <Redirect to="/" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/auth/:authType" component={AuthPage} />
            <Redirect to="/auth/login" />
          </Switch>
        )}
      </Suspense>
    </div>
  );
};

export default App;
