import { createSlice } from '@reduxjs/toolkit'



export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState:{
    page:10,
    pokemons: [],
    isLoading: false,
  },
  reducers: {
    startLoadingPokemons: (state) => {
        state.isLoading = true;
    },
    setPokemons: (state,action)=>{
        console.log(action);
    }
    
    
  },
})

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions