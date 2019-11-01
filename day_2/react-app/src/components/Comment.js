import React from "react";


const dirtyWords = (input) =>
{
    return input.match(/idiot/)
}


const Comment = (props) =>
{
    if (!dirtyWords(props.text)) 
    {
        return (
            <div className="comment">
                <div className="profile">
                    <img src={props.image} alt="profile"/>
                </div>
                <div>
                <p className="author">{props.author}</p>
                <p className="date">{props.date}</p>
                <p className="text">{props.text}</p>
                </div>
            </div>
        )
    } 

    return (
        <p> Banned Comment </p>
    )
}

export default Comment;