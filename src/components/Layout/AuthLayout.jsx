import React from "react";
import { Link } from "react-router-dom";
import Button from "../Elements/Button/Index";

const AuthLogin = (propsLogin) => {
 const { children, title, type } = propsLogin;
 return (
  <div className="flex border max-w-screen min-h-screen justify-center items-center content-center">
   <div id="formLogin" className="max-w-screen-xs text-left">
    <h1 className="font-sans text-3xl rounded font-semibold">{title}</h1>
    <p className="text-slate-400 mt-2">
     Selamat datang, silahkan daftarkan diri anda
    </p>
    {children}
    <Navigation type={type} />
    <p className="w-full text-center text-sm mt-4 font-semibold">
     {type === "register" ? "Sudah punya akun? " : "Belum punya akun? "}
     {type === "register" && (
      <Link to="/login" className="text-blue-600 mt-2">
       Masuk
      </Link>
     )}
     {type === "login" && (
      <Link to="/register" className="text-blue-600 mt-2">
       Daftar
      </Link>
     )}
    </p>
   </div>
  </div>
 );
};

const Navigation = ({ type }) => {
 if (type === "login") {
  return (
   <Button
    className="border-2 border-blue-600"
    bg="bg-white"
    text="text-blue-600"
    >
    Sign up
   </Button>
  );
 } else {
    console.log('gak ada')
 }
};

export default AuthLogin;
