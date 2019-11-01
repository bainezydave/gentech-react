import React, { Component } from 'react';
import PokemonInfo from './Pokemon'
import RandomPokemonInfo from './RandomPokemon'

class App extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            name: null,
            image: null,
            firstType: null,
            secondType: null
        }
    }

    // componentDidMount() 
    // {
    //     this.getPokemon();
    // }

    render() 
    {
        return ([
            // <RandomPokemonInfo />,
            <PokemonInfo
                pokeName = "Charizard"
                pokeTypeFirst = "Fire"
                pokeTypeSecond = "Flying"
                pokeImage= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
            />
        ])
    }
}


export default App;


