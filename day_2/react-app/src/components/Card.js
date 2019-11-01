import React from "react"

const Styles = {
    backgroundColor: "red",
    width: "300px",
    height: "300px",
    fontSize: "22px",
    margin: "10px"
}

const Card = (props) =>
{
    return (
        <div style={Styles}>
            {props.children}
        </div>
    )   
}

export default Card;