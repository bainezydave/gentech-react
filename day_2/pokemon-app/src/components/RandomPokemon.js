import React from 'react';


async function getRandomPokemon() 
{
    let url = "https://pokeapi.co/api/v2/pokemon/";
    let randomPokeData = await fetch(`${url}${Math.floor(Math.random() * 808)}`);
    let sanitizedPokeData = await randomPokeData.json();

    console.log(sanitizedPokeData)
    return (sanitizedPokeData);
}


const RandomPokemonInfo = async () =>
{
    let poke = await getRandomPokemon();

    let typeMsg;
    
    if (poke.types[1].type.name)
    {
        typeMsg = `${poke.types[0].type.name} and ${poke.types[1].type.name} type pokemom`
    } else 
    {
        typeMsg = poke.types[0].type.name
    }
        
    return (
        <div className="pokemon">
            <h1 className="name">{poke.name}</h1>
            <img src={poke.sprites.front_default} alt={poke.name} />
            <h3 className="type">{typeMsg}</h3>
        </div>
    )
}


export default RandomPokemonInfo