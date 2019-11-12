import React from "react";


function Card(props)
{
    return (
        <div id="card">
            <div id="header">
                <span>{props.values.firstName} {props.values.lastName}</span>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
            <div id="content">
                <div>{props.values.email}</div>
                <div>{props.values.phone}</div>
                <div>{props.values.streetNum} {props.values.street}, {props.values.suburb} {props.values.state}</div>
                <div className="short">{props.values.postCode}</div>
                <div className="short">{props.values.country}</div>
            </div>
        </div>
    )
}


export default Card;
