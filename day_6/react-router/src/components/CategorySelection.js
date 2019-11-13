import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CategorySelection extends Component 
{
    // constructor(props) 
    // {
    //     super(props)
    //     console.log(props)
    // }

    render() 
    {
        let { categories } = this.props;

        return (
            <div>
                <h1> Choose a category </h1>
                
                {categories.map((category, i) => <Link to={`/new/${i}`} key={category.value}>{category.value}</Link>)}
            </div>
        )
    }
}