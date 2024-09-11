import AuthLogin from "../components/Layout/AuthLayout";
import FormLogin from "../components/Fragments/FormLogin/FormLogin.jsx";
import Button from "../components/Elements/Button/Index.jsx";
import { Link } from "react-router-dom";

const LoginPage = () => {
 return (
  <AuthLogin title="Login" type="login">
   <FormLogin />
  </AuthLogin>
 );
};


export default LoginPage;
