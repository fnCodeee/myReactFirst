import React from "react";

const Input = (i) => {
 const { type, placeholder = "text", name} = i;
 return (
  <input
   name={name}
   type={type}
   className="inputan w-full py-2 rounded-md px-3 text-slate-700 border border-slate-300"
   placeholder={placeholder}
   id={name}
  />
 );
};

export default Input;
