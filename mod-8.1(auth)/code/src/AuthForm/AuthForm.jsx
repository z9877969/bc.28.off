import { useState } from "react";
import { Link } from "react-router-dom";
import s from "./AuthForm.module.css";

const AuthForm = ({ authType, cbOnSubmit }) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    cbOnSubmit(form)
    console.log("form :>> ", form);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <h2 className={s.title}>
        {authType === "register" ? "Register" : "Login"}
      </h2>
      <input
        className={s.input}
        type="text"
        name="email"
        value={form.email}
        placeholder="Input email"
        onChange={handleChange}
      />
      <input
        className={s.input}
        type="text"
        name="password"
        value={form.password}
        placeholder="Input paswword"
        onChange={handleChange}
      />
      <button className={s.button} type="submit">
        {authType === "register" ? "Register" : "Login"}
      </button>
      <Link
        to={`/auth/${authType === "register" ? "login" : "register"}`}
        className="s.button"
      >
        {authType === "register" ? "Login" : "Register"}
      </Link>
    </form>
  );
};

export default AuthForm;
