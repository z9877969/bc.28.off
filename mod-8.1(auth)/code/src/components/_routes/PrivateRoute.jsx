import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, useLocation } from "react-router-dom";
import { getIsAuth } from "../../redux/auth/authSelectors";

const PrivateRoute = ({ component: Component, path, exact, children }) => {
  const isAuth = useSelector(getIsAuth);

  return isAuth ? (
    children ? (
      <Route path={path} exact={exact}>
        {children}
      </Route>
    ) : (
      <Route path={path} exact={exact} component={Component} />
    )
  ) : (
    <Redirect to="/auth/login" />
  );
};

export default PrivateRoute;
