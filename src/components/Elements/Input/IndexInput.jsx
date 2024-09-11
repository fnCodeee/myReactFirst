import React from 'react';
import Label from './Labels.jsx'
import Input from './Input'

const InputInside = (pro) => {
    const { placeholder, name, For, type, label, objek} = pro;
    return(
      <div className={`pt-4  ${objek} mode`}>
        <Label htmlFor={For}>{label} </Label>
        <Input name={name} type={type} placeholder={placeholder}/>
      </div>
    )
}
  

export default InputInside;