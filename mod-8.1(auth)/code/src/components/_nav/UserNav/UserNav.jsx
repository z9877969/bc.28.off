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

const UserNav = () => {
  return (
    <>
      <NavLink
        className="link"
        to="/todo"
        style={btnStyle}
        activeStyle={{ color: "red" }}
      >
        ToDo
      </NavLink>
      <NavLink
        className="link"
        to="/counter"
        style={btnStyle}
        activeStyle={{ color: "red" }}
      >
        Counter
      </NavLink>
    </>
  );
};

export default UserNav;
