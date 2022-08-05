import React, { useEffect} from "react";
//import pokemon from "./pokemon.json";
//import PropTypes from "prop-types";
import axios from "axios";
//import "./App.css";
import styled from "@emotion/styled";
// import { Button } from "@mui/material";

// import PokemonRow from "./components/PokemonRow";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";
//import PokemonContext from "./PokemonContext";

import {createStore} from "redux"
import {Provider, useSelector, useDispatch} from "react-redux"

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-column-gap: 1rem;
`;

const Container = styled.div`
  margin: auto;
  width: 800px;
  paddingtop: 1em;
`;


const pockmonReducer = (state ={
 filter: "",
 pokemon: [],
 selectedPokemon: null,
}, { type, payload }) => {   //}, action}) => {
  
  switch (type) {    //switch (action.type) {

    case "SET_FILTER":
      return {
        ...state, 
        filter: payload,  //filter: action.payload,
      };
    case "SET_POKEMON":
      return {
        ...state,  
        pokemon: payload,
      };
    case "SET_SELECTED_POKEMON":
      return {
        ...state,  
        selectedPokemon: payload,
      };
    default:
      return state
  }
};

const store = createStore(pockmonReducer)


function App() {
  // const [filter, filterSet] = useState("");
  // const [pokemon, pokemonSet] = useState([]);
  // const [selectedPokemon, selectedPokemonSet] = useState(null);

 const dispatch = useDispatch()
const pokemon = useSelector(state=>state.pokemon)

  // useEffect(() => {
  //    fetch("http://127.0.0.1:5500/src/pokemon.json")
  //     .then((resp) => resp.json())
  //     .then((data) => pokemonSet(data));
  // }, []);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const { data } = await axios.get(
         // "http://127.0.0.1:5500/src/pokemon.json"
         "/pokemon.json"
        );
        dispatch({
          type: "SET_POKEMON",
          payload:data,
        })
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  if (!pokemon) {
    return <div>Loading data</div>;
  }

  return (
  

    <Container>
      <Title>Pokemon Search</Title>

      <PokemonFilter />
       
      <TwoColumnLayout>

        <PokemonTable />

        <div style={{ backgroundColor: "#d84242" }}>
          <PokemonInfo />
          {/* {selectedPokemon && <PokemonInfo  {...selectedPokemon} />} */}

        </div>
      </TwoColumnLayout>
    </Container>

  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>  <Provider store = {store }> <App /></Provider>

//Thi is useReducer version 
/**

import React, { useState, useEffect, useReducer } from "react";
//import pokemon from "./pokemon.json";
//import PropTypes from "prop-types";
import axios from "axios";
//import "./App.css";
import styled from "@emotion/styled";
// import { Button } from "@mui/material";

// import PokemonRow from "./components/PokemonRow";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";
import PokemonContext from "./PokemonContext";

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-column-gap: 1rem;
`;

const Container = styled.div`
  margin: auto;
  width: 800px;
  paddingtop: 1em;
`;


const stateReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_FILTER":
      return {
        ...state, 
        filter: payload,
      };
    case "SET_POKEMON":
      return {
        ...state,  
        pokemon: payload,
      };
    case "SET_SELECTED_POKEMON":
      return {
        ...state,  
        selectedPokemon: payload,
      };
    default:
      throw new Error();
  }
};

function App() {
  // const [filter, filterSet] = useState("");
  // const [pokemon, pokemonSet] = useState([]);
  // const [selectedPokemon, selectedPokemonSet] = useState(null);

  const [state, dispatch] = useReducer(stateReducer, {
    filter: "",
    pokemon: [],
    selectedPokemon: null,
  });


  // useEffect(() => {
  //    fetch("http://127.0.0.1:5500/src/pokemon.json")
  //     .then((resp) => resp.json())
  //     .then((data) => pokemonSet(data));
  // }, []);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const { data } = await axios.get(
          "http://127.0.0.1:5500/src/pokemon.json"
        );
        dispatch({
          type: "SET_POKEMON",
          payload:data,
        })
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  if (!state.pokemon) {
    return <div>Loading data</div>;
  }

  return (
  
<PokemonContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
    <Container>
      <Title>Pokemon Search</Title>

      <PokemonFilter />
       
      <TwoColumnLayout>

        <PokemonTable />

        <div style={{ backgroundColor: "#880808" }}>
          <PokemonInfo />
          // {selectedPokemon && <PokemonInfo  {...selectedPokemon} />} 

        </div>
      </TwoColumnLayout>
    </Container>
     </PokemonContext.Provider>
  );
}

export default App;
*/




/*
//this is for useContext, refactor version

import React, { useState, useEffect } from "react";
//import pokemon from "./pokemon.json";
//import PropTypes from "prop-types";
import axios from "axios";
//import "./App.css";
import styled from "@emotion/styled";
// import { Button } from "@mui/material";

// import PokemonRow from "./components/PokemonRow";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";
import PokemonContext from "./PokemonContext";

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-column-gap: 1rem;
`;

const Container = styled.div`
  margin: auto;
  width: 800px;
  paddingtop: 1em;
`;

function App() {
  const [filter, filterSet] = useState("");
  const [pokemon, pokemonSet] = useState([]);
  const [selectedPokemon, selectedPokemonSet] = useState(null);

  // useEffect(() => {
  //    fetch("http://127.0.0.1:5500/src/pokemon.json")
  //     .then((resp) => resp.json())
  //     .then((data) => pokemonSet(data));
  // }, []);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const { data } = await axios.get(
          "http://127.0.0.1:5500/src/pokemon.json"
        );
        pokemonSet(data);
        //console.log(data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  if (!pokemon) {
    return <div>Loading data</div>;
  }

  return (
    // <div
    //   style={{
    //     margin: "auto",
    //     width: 800,
    //     paddingTop: "1em",

    //   }}
    // >
<PokemonContext.Provider
      value={{
        filter,
        pokemon,
        filterSet,
        pokemonSet,
        selectedPokemon,
        selectedPokemonSet,
      }}
    >
    <Container>
      <Title>Pokemon Search</Title>

      <PokemonFilter />
       
      <TwoColumnLayout>

        <PokemonTable />

        <div style={{ backgroundColor: "#880808" }}>
          <PokemonInfo />
         // {selectedPokemon && <PokemonInfo  {...selectedPokemon} />} 

        </div>
      </TwoColumnLayout>
    </Container>
     </PokemonContext.Provider>
  );
}

export default App;


*/




/*
//use props version, refactor

import React, { useState, useEffect } from "react";
//import pokemon from "./pokemon.json";
//import PropTypes from "prop-types";
import axios from "axios";
//import "./App.css";
import styled from "@emotion/styled";
// import { Button } from "@mui/material";

// import PokemonRow from "./components/PokemonRow";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";
import PokemonContext from "./PokemonContext";

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-column-gap: 1rem;
`;

const Container = styled.div`
  margin: auto;
  width: 800px;
  paddingtop: 1em;
`;

function App() {
  const [filter, filterSet] = useState("");
  const [pokemon, pokemonSet] = useState([]);
  const [selectedPokemon, selectedPokemonSet] = useState(null);

  // useEffect(() => {
  //    fetch("http://127.0.0.1:5500/src/pokemon.json")
  //     .then((resp) => resp.json())
  //     .then((data) => pokemonSet(data));
  // }, []);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const { data } = await axios.get(
          "http://127.0.0.1:5500/src/pokemon.json"
        );
        pokemonSet(data);
        //console.log(data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  if (!pokemon) {
    return <div>Loading data</div>;
  }

  return (
    // <div
    //   style={{
    //     margin: "auto",
    //     width: 800,
    //     paddingTop: "1em",

    //   }}
    // >
<PokemonContext.Provider
      value={{
        filter,
        pokemon,
        filterSet,
        pokemonSet,
        selectedPokemon,
        selectedPokemonSet,
      }}
    >
    <Container>
      <Title>Pokemon Search</Title>

      <PokemonFilter />
       
      <TwoColumnLayout>

        <PokemonTable />

        <div style={{ backgroundColor: "#880808" }}>
          <PokemonInfo />
          // {selectedPokemon && <PokemonInfo  {...selectedPokemon} />} 

          </div>
          </TwoColumnLayout>
        </Container>
         </PokemonContext.Provider>
      );
    }
    
    export default App;

*/





/**
 //use props version
 import React, { useState, useEffect } from "react";
//import pokemon from "./pokemon.json";
//import PropTypes from "prop-types";
import axios from "axios";
//import "./App.css";
import styled from "@emotion/styled";
// import { Button } from "@mui/material";

// import PokemonRow from "./components/PokemonRow";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";
import PokemonContext from "./PokemonContext";

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-column-gap: 1rem;
`;

const Container = styled.div`
  margin: auto;
  width: 800px;
  paddingtop: 1em;
`;

function App() {
  const [filter, filterSet] = useState("");
  const [pokemon, pokemonSet] = useState([]);
  const [selectedPokemon, selectedPokemonSet] = useState(null);

  // useEffect(() => {
  //    fetch("http://127.0.0.1:5500/src/pokemon.json")
  //     .then((resp) => resp.json())
  //     .then((data) => pokemonSet(data));
  // }, []);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const { data } = await axios.get(
          "http://127.0.0.1:5500/src/pokemon.json"
        );
        pokemonSet(data);
        //console.log(data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  if (!pokemon) {
    return <div>Loading data</div>;
  }

  return (
    // <div
    //   style={{
    //     margin: "auto",
    //     width: 800,
    //     paddingTop: "1em",

    //   }}
    // >
<PokemonContext.Provider
      value={{
        filter,
        pokemon,
        filterSet,
        pokemonSet,
        selectedPokemon,
        selectedPokemonSet,
      }}
    >
    <Container>
      <Title>Pokemon Search</Title>

      <PokemonFilter />
       
      <TwoColumnLayout>

        <PokemonTable
          pokemon={pokemon}
          filter={filter}
          selectedPokemonSet={selectedPokemonSet}
        />

        <div style={{ backgroundColor: "#880808" }}>
          <PokemonInfo />
        //  {selectedPokemon && <PokemonInfo  {...selectedPokemon} />}

          </div>
          </TwoColumnLayout>
        </Container>
         </PokemonContext.Provider>
      );
    }
    
    export default App;
 */
