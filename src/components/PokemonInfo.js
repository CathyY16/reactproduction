
//import { useContext } from "react";
//import PokemonContext from "../PokemonContext";
//import PokemonType from "../PokemonType"
import { useSelector} from "react-redux"

//import PropTypes from "prop-types";


const PokemonInfo = () => {

// const {selectedPokemon: {name: { english }, base} } = useContext(PokemonContext)

//const dispatch = useDispatch()

const selectedPokemon = useSelector(state=>state.selectedPokemon)

  return ( 
  
     selectedPokemon? 
      <div>
      <h2>{selectedPokemon.name.english}</h2>
      <table>
        <tbody>
          {Object.keys(selectedPokemon.base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{selectedPokemon.base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>:null
  
)}
  
  //PokemonInfo.propTypes = PokemonType;
 export default PokemonInfo



 

/*
// use useContext version
import { useContext } from "react";
import PokemonContext from "../PokemonContext";
import PokemonType from "../PokemonType"

//import PropTypes from "prop-types";


const PokemonInfo = () => {

// const {selectedPokemon: {name: { english }, base} } = useContext(PokemonContext)

const {selectedPokemon } = useContext(PokemonContext)
  return ( 
  
     selectedPokemon? 
      <div>
      <h2>{selectedPokemon.name.english}</h2>
      <table>
        <tbody>
          {Object.keys(selectedPokemon.base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{selectedPokemon.base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>:null
  
)}
  
  //PokemonInfo.propTypes = PokemonType;
 export default PokemonInfo

*/


/*
//use props version
  import { useContext } from "react";
  import PokemonContext from "../PokemonContext";
  import PokemonType from "../PokemonType"
  
  //import PropTypes from "prop-types";
  
  
  const PokemonInfo = ({name: { english }, base}) => {
    
    return (
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
  )}
    
    PokemonInfo.propTypes = PokemonType;
  
  
    export default PokemonInfo
  
*/