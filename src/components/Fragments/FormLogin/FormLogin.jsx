import React from "react";
import InputInside from "../../Elements/Input/IndexInput.jsx";
import Button from "../../Elements/Button/Index.jsx";

const FormLogin = () => {
 const handleLogin = (event) => {
  event.preventDefault(); //beralih halaman saat di aktifkan

  localStorage.setItem("email", event.target.email.value);
  localStorage.setItem("password",  event.target.password.value);
  window.location.href = "/product";
 };
 return (
  <form onSubmit={handleLogin} className="mt-3">
   <div className="mb-3 flex-row">
    <InputInside
     name="email"
     label="email"
     placeholder="Example@gmail.cot"
     type="email"
    ></InputInside>
    <InputInside
     name="password"
     label="Password"
     placeholder="****"
     type="password"
    />
   </div>
   <Button type="submit">Login</Button>
  </form>
 );
};

export default FormLogin;
