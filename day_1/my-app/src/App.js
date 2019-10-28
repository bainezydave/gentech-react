import React from 'react';


const allowedInBar = (age = 0) =>
{
    return age >= 18 ? "Allowed" : "Not Allowed";
};


const App = () =>
{
    // let styles = { color: "red", fontSize: "30px" };
    // return <div className="button">
    //     <p>Current Time is {getCurrentTime()} </p>
    //     <p>Current Time is {getCurrentTime()} </p>
    //     <p>Current Time is {getCurrentTime()} </p>
    // </div>

    return <div>
        <p>{allowedInBar(19)} in bar.</p>
    </div>
};