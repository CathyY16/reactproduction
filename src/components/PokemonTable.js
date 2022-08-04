//import React, { useContext } from 'react'
import PokemonRow from './PokemonRow'
import styled from "@emotion/styled";
import PokemonType from '../PokemonType'
import PropTypes from "prop-types";
//import PokemonContext from '../PokemonContext';
import { useSelector, useDispatch} from "react-redux"


const Th = styled.th`
  text-align: left;
  font-size: X-large;
`;


const PokemonTable = ( )=> {
   // const {state, dispatch} = useContext(PokemonContext)

   // const {state:{pokemon, filter}, dispatch} = useContext(PokemonContext)

  const dispatch = useDispatch()
  const pokemon = useSelector(state=>state.pokemon)
  const filter = useSelector(state=>state.filter)


   return( 
   <table style={{ backgroundColor: "pink" }}>
    <thead>
      <tr>
        <Th>Name</Th>
        <Th>Type</Th>
        <Th>Selected</Th>
      </tr>
    </thead>
    <tbody>
      {pokemon
        .filter(({ name: { english } }) =>
          english
            .toLocaleLowerCase()
            .includes(filter.toLocaleLowerCase())
        )
        // .filter((pokemon) =>
        //   pokemon.name.english
        //     .toLowerCase()
        //     .includes(filter.toLowerCase())
        // )
        .slice(0, 20)
        .map((pokemon, index) => (
          <PokemonRow
            key={pokemon.id}
            
            pokemon={pokemon}
            onClick={(pokemon) => dispatch({type:"SET_SELECTED_POKEMON", payload: pokemon})}
          />
        ))}
    </tbody>
  </table>

)}

PokemonTable.propTypes = {
    pokemon: PropTypes.arrayOf(PokemonType),
  };

export default PokemonTable




//This useReducer version

/**

import React, { useContext } from 'react'
import PokemonRow from './PokemonRow'
import styled from "@emotion/styled";
import PokemonType from '../PokemonType'
import PropTypes from "prop-types";
import PokemonContext from '../PokemonContext';

const Th = styled.th`
  text-align: left;
  font-size: X-large;
`;


const PokemonTable = ( )=> {
   // const {state, dispatch} = useContext(PokemonContext)

    const {state:{pokemon, filter}, dispatch} = useContext(PokemonContext)

   return( 
   <table style={{ backgroundColor: "pink" }}>
    <thead>
      <tr>
        <Th>Name</Th>
        <Th>Type</Th>
        <Th>Selected</Th>
      </tr>
    </thead>
    <tbody>
      {pokemon
        .filter(({ name: { english } }) =>
          english
            .toLocaleLowerCase()
            .includes(filter.toLocaleLowerCase())
        )
        // .filter((pokemon) =>
        //   pokemon.name.english
        //     .toLowerCase()
        //     .includes(filter.toLowerCase())
        // )
        .slice(0, 20)
        .map((pokemon, index) => (
          <PokemonRow
            key={pokemon.id}
            
            pokemon={pokemon}
            onClick={(pokemon) => dispatch({type:"SET_SELECTED_POKEMON", payload: pokemon})}
          />
        ))}
    </tbody>
  </table>

)}

PokemonTable.propTypes = {
    pokemon: PropTypes.arrayOf(PokemonType),
  };

export default PokemonTable

*/


/*
// use useContext version
import React, { useContext } from 'react'
import PokemonRow from './PokemonRow'
import styled from "@emotion/styled";
import PokemonType from '../PokemonType'
import PropTypes from "prop-types";
import PokemonContext from '../PokemonContext';

const Th = styled.th`
  text-align: left;
  font-size: X-large;
`;


const PokemonTable = ( )=> {
  const {pokemon, filter, selectedPokemonSet} = useContext(PokemonContext)

   return( 
   <table style={{ backgroundColor: "pink" }}>
    <thead>
      <tr>
        <Th>Name</Th>
        <Th>Type</Th>
        <Th>Selected</Th>
      </tr>
    </thead>
    <tbody>
      {pokemon
        .filter(({ name: { english } }) =>
          english
            .toLocaleLowerCase()
            .includes(filter.toLocaleLowerCase())
        )
        // .filter((pokemon) =>
        //   pokemon.name.english
        //     .toLowerCase()
        //     .includes(filter.toLowerCase())
        // )
        .slice(0, 20)
        .map((pokemon, index) => (
          <PokemonRow
            key={pokemon.id}
            
            pokemon={pokemon}
            onClick={(pokemon) => selectedPokemonSet(pokemon)}
          />
        ))}
    </tbody>
  </table>

)}

PokemonTable.propTypes = {
    pokemon: PropTypes.arrayOf(PokemonType),
  };

export default PokemonTable

*/




/**
 //use props version
 import React from 'react'
import PokemonRow from './PokemonRow'
import styled from "@emotion/styled";
import PokemonType from '../PokemonType'
import PropTypes from "prop-types";

const Th = styled.th`
  text-align: left;
  font-size: X-large;
`;


const PokemonTable = ({pokemon, filter, selectedPokemonSet} )=> {

   return( 
   <table style={{ backgroundColor: "pink" }}>
    <thead>
      <tr>
        <Th>Name</Th>
        <Th>Type</Th>
        <Th>Selected</Th>
      </tr>
    </thead>
    <tbody>
      {pokemon
        .filter(({ name: { english } }) =>
          english
            .toLocaleLowerCase()
            .includes(filter.toLocaleLowerCase())
        )
        // .filter((pokemon) =>
        //   pokemon.name.english
        //     .toLowerCase()
        //     .includes(filter.toLowerCase())
        // )
        .slice(0, 20)
        .map((pokemon, index) => (
          <PokemonRow
            key={pokemon.id}
            
            pokemon={pokemon}
            onClick={(pokemon) => selectedPokemonSet(pokemon)}
          />
        ))}
    </tbody>
  </table>



)}

PokemonTable.propTypes = {
    pokemon: PropTypes.arrayOf(PokemonType),
  };

export default PokemonTable
 */