import { NavLink } from "react-router-dom";

const btnStyle = {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "green",
    textDecoration: "none",
    cursor: "pointer",
    fontSize: "24px",
    borderRadius: "30%",
  };

const AuthNav = () => {
  return (
    <>
      <NavLink
        className="link"
        exact
        to="/auth/login"
        style={btnStyle}
        activeStyle={{ color: "red" }}
      >
        Login
      </NavLink>
      <NavLink
        className="link"
        to="/auth/register"
        style={btnStyle}
        activeStyle={{ color: "red" }}
      >
        Register
      </NavLink>
    </>
  );
};

export default AuthNav;
