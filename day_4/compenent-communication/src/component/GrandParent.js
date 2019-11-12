import React, { Component } from "react";
import Parent from "./Parent";
import "../App.css";

export default class GrandParent extends Component 
{
    constructor(props)
    {
        super(props)
        this.state = {
            name: "Bob Ross"
        }
    }

    changeName = newName => this.setState({ name: newName });

    render()
    {
        return (
            <div className="App">
                <h1>Grand Parent: </h1>
                <p>{this.state.name}</p>
                <Parent changeGrandParentName={this.changeName} />
            </div>
        )
    }
}