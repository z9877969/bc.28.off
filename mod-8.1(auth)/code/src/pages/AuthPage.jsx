import { useDispatch } from "react-redux";
import AuthForm from "../AuthForm/AuthForm";
import { userRegister, userLogin } from "../redux/auth/authOperations";

const AuthPage = ({ match }) => {
  const dispatch = useDispatch();
  const {
    params: { authType },
  } = match;

  const authOperation = (userData) => {
    authType === "register" && dispatch(userRegister(userData));
    authType === "login" && dispatch(userLogin(userData));
  };

  return (
    <div style={{ paddingTop: "100px" }}>
      <AuthForm authType={authType} cbOnSubmit={authOperation} />
    </div>
  );
};

export default AuthPage;
