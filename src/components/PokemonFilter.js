//import React, { useContext } from 'react'
import styled from "@emotion/styled";
//import PropTypes from "prop-types";
//import PokemonContext from '../PokemonContext';
import { useSelector, useDispatch} from "react-redux"
const Input = styled.input`
  width: 100%;
  font-size: X-large;
  padding: 0.2rem;
`;

const PokemonFilter = () => {


  const dispatch = useDispatch()
  
  const filter = useSelector(state=>state.filter)

 return   <Input
        type="text"
        value={filter}
        onChange={(evt) =>dispatch({type:"SET_FILTER", payload:(evt.target.value)})}
         />
}

//PokemonFilter.propTypes = PropTypes.string


export default PokemonFilter



//This is useReducer version
/*
import React, { useContext } from 'react'
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import PokemonContext from '../PokemonContext';

const Input = styled.input`
  width: 100%;
  font-size: X-large;
  padding: 0.2rem;
`;

const PokemonFilter = () => {


 const {state, dispatch} = useContext(PokemonContext)

 return   <Input
        type="text"
        value={state.filter}
        onChange={(evt) =>dispatch({type:"SET_FILTER", payload:(evt.target.value)})}
         />
}

//PokemonFilter.propTypes = PropTypes.string


export default PokemonFilter

*/