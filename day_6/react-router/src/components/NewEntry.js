import React, { Component } from "react";
import { default as EntryForm } from "./EntryForm"


export default class NewEntry extends Component 
{
    constructor(props) 
    {
        super(props);
        this.state = {
            errMsg: "",
            category: null,
            newItem: ""
        }
    }

    componentDidMount()
    {
        let { id } = this.props.match.params;
        let category = this.props.categories[id];

        if (!category) this.setState({ errMsg: "Invalid Category." })
        if (category) this.setState({ category })
    }

    updateValue = (e) => this.setState({newItem: e.target.value});

    addItems = (e) =>
    {
        e.preventDefault();
        let temp = this.state.category.items;
        temp.push(this.state.newItem);
        this.setState({items: temp})
    }

    render() 
    {
        return (
            <div>
                {this.state.errMsg && <h1>{this.state.errMsg}</h1>}
                {
                    this.state.category &&
                    <h1>Make a new entry to {this.state.category.value} Category</h1>
                }

                <EntryForm updateValue={this.updateValue} addItems={this.addItems} />

                {
                    this.state.category !== null &&
                    this.state.category.items.map((category, i) => <li key={i}>{category}</li>)
                }
            </div>
        )
    }
}