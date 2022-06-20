import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const PokemonApp = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPokemon());
    
      
    }, [])
    

  return (
    <>
        <h1>Poke APP</h1>
        <hr />
        <ul>
            <li> hola </li>
            <li> hola </li>
            <li> hola </li>
            <li> hola </li>
        </ul>
    </>
  )
}
