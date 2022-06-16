import { createContext, useContext, useEffect, useState } from 'react';
import { IPokemon } from '../interfaces/Pokemon';

import React from 'react';
import { PropsWithChildrenOnly } from '../react';
import { pokemons } from '../utils/Pokemons';

export type PokemonsContextType = {
  pokemons: IPokemon[];
  setPlayerPokemon: (pokemon: IPokemon) => void;
  playerPokemon: IPokemon;
  opponentPokemon: IPokemon;
};

export const PokemonsContext = createContext<PokemonsContextType>({
  pokemons: [],
  setPlayerPokemon: () => {},
  playerPokemon: {} as IPokemon,
  opponentPokemon: {} as IPokemon,
});

export const PokemonsProvider: React.FC<PropsWithChildrenOnly> = ({
  children,
}) => {
  const [playerPokemon, setPlayerPokemon] = useState({} as IPokemon);
  const [opponentPokemon, setOpponentPokemon] = useState({} as IPokemon);

  useEffect(() => {
    const availablePokemons = pokemons.filter(
      (pokemon) => pokemon.id !== playerPokemon.id
    );
    setOpponentPokemon(
      availablePokemons[Math.floor(Math.random() * availablePokemons.length)]
    );
  }, [playerPokemon, opponentPokemon]);

  return (
    <PokemonsContext.Provider
      value={{ playerPokemon, setPlayerPokemon, opponentPokemon, pokemons }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};

export const usePokemons = () => {
  const context = useContext(PokemonsContext);
  return context;
};
