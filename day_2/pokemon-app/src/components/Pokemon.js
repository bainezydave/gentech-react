import React from 'react';


const PokemonInfo = (props) =>
{
    let typeMsg;
    
    if (props.pokeTypeSecond)
    {
        typeMsg = `${props.pokeTypeFirst} and ${props.pokeTypeSecond} type pokemom`
    } else 
    {
        typeMsg = props.pokeTypeFirst
    }
        
    return (
        <div className="pokemon">
            <h1 className="name">{props.pokeName}</h1>
            <img src={props.pokeImage} alt={props.pokeName} />
            <h3 className="type">{typeMsg}</h3>
        </div>
    )
}


export default PokemonInfo