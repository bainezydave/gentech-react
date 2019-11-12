import React from "react";


export default function TextField(props)
{
    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.value} onChange={props.editField} /> 
        </div>
    )
}

export function Button(props)
{
    return (
        <div className="btn-field">
            <button>Button</button>
        </div>
    )
}

