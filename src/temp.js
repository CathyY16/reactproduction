

import React from "react";
import "./App.css";
import pokemon from "./pokemon.json";
import PropTypes from "prop-types";

// const PokemonRow = ({ pokemon }) => {
//   return (
//     <tr >
//       {/* key = {[pokemon.id, pokemon.name.english].join(":")} */}
//       <td>{pokemon.name.english}</td>
//       <td>{pokemon.type.join(", ")}</td>
//     </tr>
//   );
// };

// const PokemonType = PropTypes.shape({
//   id: PropTypes.string.isRequired,
//   name: PropTypes.shape({
//     english: PropTypes.string.isRequired,
//     japanese: PropTypes.string.isRequired,
//     chinese: PropTypes.string.isRequired,
//     french: PropTypes.string.isRequired,
//   }),
//   type: PropTypes.arrayOf(PropTypes.string.isRequired),
//   base: PropTypes.shape({
//     HP: PropTypes.number.isRequired,
//     Attack: PropTypes.number.isRequired,
//     Defense: PropTypes.number.isRequired,
//     "Sp. Attack": PropTypes.number.isRequired,
//     "Sp. Defense": PropTypes.number.isRequired,
//     Speed: PropTypes.number.isRequired,
//   }),
// });

const PokemonRow = ({ pokemon, onSelect }) => (
  <>
    <tr key={pokemon.id}>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <button onClick={() => onSelect(pokemon)}>More Information</button>
      </td>
    </tr>
  </>
);

// PokemonRow.propTypes = {
//   pokemon: PropTypes.arrayOf(PokemonType),
//   onClick: PropTypes.func
// };


PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string
    })
  }),
  onSelect: PropTypes.func
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

PokemonInfo.propTypes = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.shape({
         english: PropTypes.string,
        japanese: PropTypes.string,
         chinese: PropTypes.string,
         french: PropTypes.string,
       }),
 
  base: PropTypes.shape({
    HP: PropTypes.number,
    Attack: PropTypes.number,
    Defense: PropTypes.number,
    "Sp. Attack": PropTypes.number,
    "Sp. Defense": PropTypes.number,
    Speed: PropTypes.number,
  }),
});





function App() {
  const [filter, filterSet] = React.useState("");
  const [selectedPokemon, selectedPokemonSet] = React.useState(null);

  //selectedPokemon.propTypes = PokemonInfo


  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1em",
      }}
    >
      <h1 className="title">Pokemon Search</h1>

      
        <input
          type="text"
          value={filter}
          onChange={(e) => filterSet(e.target.value)}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "70% 30%",
            gridColumnGap: "1rem",
          }}
        >
          <div>
            <table width="100%">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Selected</th>
                </tr>
              </thead>
              <tbody>
                {pokemon
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
                      onSelect={(pokemon) => selectedPokemonSet(pokemon)}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        

        {selectedPokemon && <PokemonInfo {...selectedPokemon} />}
        {/* {selectedPokemon && <PokemonInfo selectedPokemon = {selectedPokemon} />} */}
        {/* {selectedPokemon ? <PokemonInfo selectedPokemon = {selectedPokemon} /> : null} */}
        </div>

      </div>
   
  );
}

export default App;






