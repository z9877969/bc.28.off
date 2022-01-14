import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsAuth } from "../../redux/auth/authSelectors";
import { logOut } from "../../redux/auth/authSlice";
import AuthNav from "../_nav/AuthNav/AuthNav";
import UserNav from "../_nav/UserNav/UserNav";

const Nav = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);

  return (
    <header style={{ position: "fixed", width: "100%" }}>
      <nav className="nav">{isAuth ? <UserNav /> : <AuthNav />}</nav>
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
