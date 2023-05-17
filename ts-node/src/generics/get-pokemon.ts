
import axios from 'axios';
import { Pokemon } from '../interfaces';

export const getPokemon = async (id: number): Promise<Pokemon> => {

    const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);

    console.log('resp', data.abilities[0].ability.name);

    return data;
}