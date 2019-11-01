import React, { Component } from 'react';
import Clock from "./Clock";

const getClockIcon = (input) =>
{
    if (isWarm(input).bool) return "sun.png"
    return "snowflake.jpg"
}


const isWarm = (input) =>
{
    let month = new Date().getMonth();

    let warmMonthsNorth = [2, 3, 4, 5, 6, 7];
    let warmMonthsSouth = [0, 1, 11, 8, 9, 10];

    if (input > 0 && (warmMonthsNorth.includes(month))) return ({ text: "It is warm", bool: true })
    if (input < 0 && (warmMonthsSouth.includes(month))) return ({ text: "It is warm", bool: true })

    return ({ text: "It is cold", bool: false })
}


//Every class compenet must have a render method which returns HTML.
class App extends Component 
{
    //Constructor initilises state.
    constructor(props)
    {
        super(props)
        this.state = {
            latitude: null
        }

        //Make API call in the constructor, in future we will be using life cycle method.
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({latitude: position.coords.latitude}),
            err => console.log(err)
        )
    }

    render() 
    {
        if (this.state.latitude)
        {
            return (
                <div>
                    <p>{isWarm(this.state.latitude).text}</p>
                    <p>{this.state.latitude}</p>
                    <Clock
                        icon={getClockIcon(this.state.latitude)}
                        timezone={"Sydney/Australia"}
                        date={new Date()}
                    />
                </div>
            )
        }
        return (null)
    }
}





export default App;
