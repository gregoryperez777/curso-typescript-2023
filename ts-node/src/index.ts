
// esto quedo de la seccion 11
// import { getPokemon } from './generics/get-pokemon';


// getPokemon(4)
//     .then(pokemon => console.log(pokemon.sprites.front_default))
//     .catch(err => console.error(err))
//     .finally(() => console.log('fin de get pokemon'))  


//    ( shift + click ) copia grande pedasos de texto

import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pikachu';

charmander.publicApi = 'https://fernando-herrera.com'

console.log('charmander', charmander);
charmander.savePokemonToDB(10);