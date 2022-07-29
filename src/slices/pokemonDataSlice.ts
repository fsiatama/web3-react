import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pokemon } from '../types/pokemon';

type State = {
  pokemons: Pokemon[];
  filteredPokemons: Pokemon[];
};

const initialState: State = {
  pokemons: [],
  filteredPokemons: [],
};

const setPokemons: CaseReducer<State, PayloadAction<Pokemon[]>> = (
  state,
  action,
) => {
  state.pokemons = action.payload;
  state.filteredPokemons = action.payload;
};

const setFilteredPokemons: CaseReducer<State, PayloadAction<string>> = (
  state,
  action,
) => {
  const newPokemons = state.pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(action.payload.toLowerCase()),
  );
  state.filteredPokemons = newPokemons;
};

const pokemonDataSlice = createSlice({
  name: 'pokemonData',
  initialState,
  reducers: {
    setPokemons,
    setFilteredPokemons,
  },
});

export const {} = pokemonDataSlice.actions;

export default pokemonDataSlice.reducer;
