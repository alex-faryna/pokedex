import { gql } from '@apollo/client';
import './pokedex.css'
import useQL from '../../utils/useQL';
import { useState } from 'react';

const GET_POKEMON_DETAILS = gql`{
    getPokemon(pokemon: porygon) {
        sprite
        num
        species
        color
    }
}`;

const GET_ALL_POKEMON = gql`{
    getAllPokemon {
        num
        species
    },
    getPokemon(pokemon: dragonite) {
    abilities {
      first {
        name
      }
    }
  }
}`;

const GET_POKEMON_DETAILS_WITH_PARAM = gql`
query ExampleQuery($pokemon: PokemonEnum!){
    getPokemon(pokemon: $pokemon) {
        sprite
        num
        species
        color
    }
}`;


const POKEDEX_QUERY = gql`
    query PokedexQuery($offset: Int = 89, $limit: Int = 75) {
        getAllPokemon(offset: $offset, take: $limit) {
            num
            species
            sprite
        }
    }
`;

interface PokemonListItem {
    num: number;
    species: string;
    sprite: string;
}

export function Pokedex() {
    const [offset, setOffset] = useState(89);
    const [pokemonList, setPokemonList] = useState<PokemonListItem[]>([]);
    const { loading, error, data } = useQL(POKEDEX_QUERY, {
        variables: { offset },
        onCompleted(data) {
            const { getAllPokemon } = data as { getAllPokemon: PokemonListItem[] };
            const basePokemons = getAllPokemon.reduce((arr: PokemonListItem[], pokemon) => {
                if ((arr.at(-1)?.num || 0) < pokemon.num) {
                    arr.push(pokemon);
                }
                return arr;
            } , []);
            setPokemonList(list => [...list, ...basePokemons]);
        },
    });

    return <div className="pokedex">
        <div className='pokemon-list-container'>
        {
            pokemonList.map(pokemon => <div key={pokemon.num} className='pokemon-list-item'>
                <span>{ pokemon.num }</span>
                <span>{ pokemon.species }</span>
                <img alt={pokemon.species} src={pokemon.sprite}></img>
            </div>)
        }
        </div>
    </div>
}