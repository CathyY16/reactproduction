import PokemonType from "../PokemonType"
import { Button } from "@mui/material";
import PropTypes from "prop-types";


const PokemonRow = ({ pokemon, onClick }) => {

    return (
  
  
    <tr key={pokemon.id}>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <Button
          variant="contained"
          color="primary"
         
          onClick= {() => onClick(pokemon)}
          
          
        >
          More Information
        </Button>
      </td>
    </tr>
  
)}

PokemonRow.propTypes = {
  pokemon: PokemonType,
  onClick: PropTypes.func.isRequired,
};

export default PokemonRow


/**
 //use props version
 import PokemonType from "../PokemonType"
import { Button } from "@mui/material";
import PropTypes from "prop-types";


const PokemonRow = ({ pokemon, onClick }) => {
  return (
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
)}

PokemonRow.propTypes = {
  pokemon: PokemonType,
  onClick: PropTypes.func.isRequired,
};

export default PokemonRow
 */