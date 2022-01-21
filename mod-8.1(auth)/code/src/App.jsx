import { useEffect } from "react";
import { Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import PrivateRoute from "./components/_routes/PrivateRoute";
import PublicRoute from "./components/_routes/PublicRoute";
import AuthPage from "./pages/AuthPage";
import { getCurUser } from "./redux/auth/authOperations";
import { getIsAuth, getIsToken } from "./redux/auth/authSelectors";
import { logOut } from "./redux/auth/authSlice";

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
  }, [dispatch]);

  useEffect(() => {
    !isAuth && dispatch(logOut());
  }, [dispatch, isAuth]);

  return (
    <div className="App">
      <Nav />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <PrivateRoute path={"/counter"} component={CounterPage} />
          <PrivateRoute path={"/todo"} component={ToDoPage} />

          <PublicRoute
            component={AuthPage}
            path="/auth/:authType"
            restricted={true}
          />
          <PublicRoute path={"/"} exact={true} restricted={false}>
            <HomePage title={title} />
          </PublicRoute>
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
