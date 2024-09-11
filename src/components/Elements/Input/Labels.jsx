import React from 'react'

const Label = (props) => {
    const {htmlFor, children} = props;
    return (
        <label
         htmlFor={htmlFor}
         className="flex text-slate-700 text-sm font-bold mb-2"
        >
         {children}
        </label>
    )
}

export default Label;