import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsAuth } from "../../redux/auth/authSelectors";
import { logOut } from "../../redux/auth/authSlice";
import AuthNav from "../_nav/AuthNav/AuthNav";
import UserNav from "../_nav/UserNav/UserNav";

const btnStyle = {
  display: "inline-block",
  padding: "10px 20px",
  backgroundColor: "green",
  textDecoration: "none",
  cursor: "pointer",
  fontSize: "24px",
  borderRadius: "30%",
};

const Nav = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);

  return (
    <header style={{ position: "fixed", width: "100%" }}>
      <nav className="nav">
        <NavLink
          className="link"
          exact
          to="/"
          style={btnStyle}
          activeStyle={{ color: "red" }}
        >
          Home
        </NavLink>
        {isAuth ? <UserNav /> : <AuthNav />}
      </nav>
      {isAuth && (
        <button
          type="button"
          style={{ position: "absolute", top: "0", right: "0" }}
          onClick={() => dispatch(logOut())}
        >
          LogOut
        </button>
      )}
    </header>
  );
};

export default Nav;
