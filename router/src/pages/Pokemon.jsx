// import React from "react";

// export default function Pokemon() {
//     return (
//     <div className='container'> Working on it! </div>
//     )
// };

import React from 'react';
import { useParams } from 'react-router-dom';
import { pokemonData } from '../pokemonData';
import './Pokemon.css'; 

export default function Pokemon() {
  const { pokemonID } = useParams();

  // Use '===' for strict equality check
  const pokemonDetails = pokemonData && pokemonData.length > 0 ? pokemonData.find(f => f.id === Number(pokemonID)) : null;
    // gotta add Number because 1 =/ '1'. change string to number
  return (
    <>
      {pokemonDetails ? (
        <div className="pokemon-container">
          <div className="pokemon-details">
            <h1>{pokemonDetails.name}</h1>
            <img src={pokemonDetails.image} alt={pokemonDetails.name} />
          </div>
        </div>
      ) : (
        <div className="pokemon-container">
          <div className="no-pokemon">No Pokémon found</div>
        </div>
      )}
    </>
  );
}