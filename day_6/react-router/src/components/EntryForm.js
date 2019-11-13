import React from "react";

function EntryForm(props)
{
    return (
        <form onSubmit={props.addItems}>
            <input type="text" name="item" onChange={props.updateValue} /> 
            <button type="submit">Add</button>
        </form>
    )
}

export default EntryForm;