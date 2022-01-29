/*
Pokecard
Shows a single Pokemon, with their name, image, and type.
*/

import React from 'react';
// import './Pokecard.css';

const BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';
// then use ${id}.png  for image

function SinglePokemon(props){
    // get the image source
    let imageSource = `${BASE_URL}/${props.id}.png`;
    return (
        <div className="SinglePokemon">
             <div className="SinglePokemon-name">{props.name}</div>
            <img className="SinglePokemon-image" src = {imageSource} />
            <div className="SinglePokemon-type">{props.type}</div>
        </div>
    )
}

export default SinglePokemon;
