import { Pokemon } from '../interfaces/Pokemon';

export const pokemons: Pokemon[] = [
  {
    id: 1,
    name: 'Cyndaquil',
    type: 'Fire',
    hp: 28,
    image: 'https://img.pokemondb.net/artwork/large/cyndaquil.jpg',

    moves: {
      move1: 'Tackle',
      move2: 'Ember',
    },
  },
  {
    id: 2,
    name: 'Bulbasaur',
    type: 'Grass',
    hp: 28,
    image: 'https://img.pokemondb.net/artwork/large/bulbasaur.jpg',
    moves: {
      move1: 'Tackle',
      move2: 'Vine Whip',
    },
  },
];
