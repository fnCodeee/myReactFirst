import React from "react";
import InputInside from "../../Elements/Input/IndexInput.jsx";
import Button from "../../Elements/Button/Index.jsx";

const FormLogin = () => {
 return (
  <form action="" className="pt-4">
   <div className="mb-3 flex-row">
   <InputInside
     For="Password"
     label="Username"
     placeholder="Your name!"
     type="password"
    />
    <InputInside
     For="Email"
     label="Email"
     placeholder="Example@gmail.cot"
     type="email"
    ></InputInside>
    <InputInside
     For="Password"
     label="Password"
     placeholder="****"
     type="password"
    />
    <InputInside
     For="PasswordConfirm"
     label="Password Confirm"
     placeholder="****"
     type="passwordConfirm"
    />
   </div>
   <Button className="bg-blue-600 w-full text-white">Login</Button>
  </form>
 );
};

const newInput = document.createElement('input');
const a = document.querySelectorAll("Input");
console.log(a);

for (let i = 0; i < a.length; i++) {
    if(a[i].type === 'password') {
        console.log('ada', a[i])
        document.write(newInput).type = 'checkbox';
    } else {
        console.log('tidak ada')
    }
}

export default FormLogin;
