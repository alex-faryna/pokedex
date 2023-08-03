import { gql, useQuery } from '@apollo/client';
import './pokedex.css'
import useQL from '../../utils/useQL';


const GET_POKEMON_DETAILS = gql`
  {
    getPokemon(pokemon: dragonite) {
      sprite
      num
      species
      color
    }
  }
`;

export function Pokedex() {

  const { loading, error, data } = useQL(GET_POKEMON_DETAILS);

  if (loading) return <span>'Loading...'</span>;
  if (error) return <span>`Error! ${error.message}`</span>;

  console.log(data);

  return <div> Insert how you want to display the data here </div>;
    // return <div className="pokedex">Pokedex</div>
}