import React, { Component } from "react";

export default class Child extends Component 
{
    constructor(props)
    {
        super(props)
        this.state = {
            userInput: ''
        }
    }

    render()
    {
        return (
            <div>
                <h1>Child: </h1>
                <p>{this.props.name}</p>
                <input type="text" onChange={ e => this.props.changeGrandParentName(e.target.value) }/>
            </div>
        )
    }
}