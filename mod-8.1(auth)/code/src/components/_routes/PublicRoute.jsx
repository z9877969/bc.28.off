import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { getIsAuth } from "../../redux/auth/authSelectors";

const PublicRoute = ({
  component: Component,
  path,
  exact,
  children,
  restricted,
}) => {
  const isAuth = useSelector(getIsAuth);

  return isAuth && restricted ? (
    <Redirect to="/todo" />
  ) : children ? (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  ) : (
    <Route path={path} exact={exact} component={Component} />
  );
};

export default PublicRoute;
