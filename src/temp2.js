import React, { useState, useEffect } from "react";
//import pokemon from "./pokemon.json";
import PropTypes from "prop-types";
import axios from "axios";
//import "./App.css";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const PokemonType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.shape({
    english: PropTypes.string.isRequired,
    japanese: PropTypes.string.isRequired,
    chinese: PropTypes.string.isRequired,
    french: PropTypes.string.isRequired,
  }),
  type: PropTypes.arrayOf(PropTypes.string.isRequired),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    "Sp. Attack": PropTypes.number.isRequired,
    "Sp. Defense": PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
  }),
});

const PokemonRow = ({ pokemon, onClick }) => (
  <>
    <tr key={pokemon.id}>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onClick(pokemon)}
        >
          More Information
        </Button>
      </td>
    </tr>
  </>
);

PokemonRow.propTypes = {
  pokemon: PropTypes.arrayOf(PokemonType),
};

const PokemonInfo = ({ name: { english }, base }) => (
  <div>
    <h2>{english}</h2>
    <table>
      <tbody>
        {Object.keys(base).map((key) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{base[key]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

PokemonInfo.propTypes = PokemonType;

//pokemon.propTypes = PropTypes.arrayOf(PokemonType)

const Title = styled.h1`
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  font-size: X-large;
  padding: 0.2rem;
`;

// const Container = styled.div`
//   margin: auto,
//   width: 800px,
//   paddingTop: 1em,
// `

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

const Th = styled.th`
  text-align: left;
  font-size: X-large;
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

    <Container>
      <Title>Pokemon Search</Title>

      <Input
        type="text"
        value={filter}
        onChange={(evt) => filterSet(evt.target.value)}
      />

      <TwoColumnLayout>
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
              // .filter(({ name: { english } }) =>
              //   english
              //     .toLocaleLowerCase()
              //     .includes(filter.toLocaleLowerCase())
              // )
              .filter((pokemon) =>
                pokemon.name.english
                  .toLowerCase()
                  .includes(filter.toLowerCase())
              )
              .slice(0, 20)
              .map((pokemon) => (
                <PokemonRow
                  key={pokemon.id}
                  pokemon={pokemon}
                  onClick={(pokemon) => selectedPokemonSet(pokemon)}
                />
              ))}
          </tbody>
        </table>

        <div style={{ backgroundColor: "#880808" }}>
          {selectedPokemon && <PokemonInfo {...selectedPokemon} />}
        </div>
      </TwoColumnLayout>
    </Container>
  );
}

export default App;
