import { combineReducers } from '@reduxjs/toolkit';
import pokemonDataReducer from '../slices/pokemonDataSlice';

const rootReducer = combineReducers({
  pokemonData: pokemonDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
