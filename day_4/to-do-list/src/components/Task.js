import React, { Component } from "react";

export default class Task extends Component 
{
    constructor(props)
    {
        super(props)
        this.state = { task: '' }
    }

    newTask = (title, content) => this.setState({ title: title, content: content });

    render()
    {
        return (
            <div className="task">
                <div className="title">{this.props.title}</div>
                <div className="content">{this.props.content}</div>
            </div>
        )
    }
}