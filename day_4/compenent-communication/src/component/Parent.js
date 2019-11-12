import React, { Component } from "react";
import Child from "./Child";
import "../App.css";

export default class Parent extends Component 
{
    constructor(props)
    {
        super(props)
        this.state = {
            title: "REACT 101"
        }
    }

    changeTitle = newTitle => this.setState({ title: newTitle });

    render()
    {
        return (
            <div className="App">
                <h1>Parent: </h1>
                <p>{this.state.title}</p>
                <Child changeParentTitle={this.changeTitle} title={this.state.title} {...this.props} />
            </div>
        )
    }
}