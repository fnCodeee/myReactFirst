import FormRegister from "../components/Fragments/FormRegister/FormReg";
import AuthLogin from "../components/Layout/AuthLayout";    

const Register = () => {
    return (
        <AuthLogin title="Register" type="register">
            <FormRegister />
        </AuthLogin>
    );
};

export default Register;