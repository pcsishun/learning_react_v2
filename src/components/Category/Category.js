// import axios  from "axios";
// import { useState, useEffect, useReducer } from "react";
import Reducer from '../../Reducer';
import ThirdComponent from '../testcomponents/ThirdComponent/ThirdCompoent';
import LogicLearn from './LogicLearn/LogicLearn';

const Category = () => {

    // const [pokemon, setPokemon] = useState([]);
    // useEffect(()=>{
    //     axios.get("https://pokeapi.co/api/v2/berry-firmness/")
    //     .then(res => setPokemon(res.data.results))
    //     .catch(err => setPokemon(err))
    // })

    const ispokemon = Reducer("https://pokeapi.co/api/v2/berry-firmness/");
    const pokemon = ispokemon.data
 
 
    return(
        <>
            <div class="title-container">
                <h3>Category page</h3>
            </div>
            <div class="content-container">
                {
                    pokemon.length === 0 &&  <h4>Loading...</h4>
                }
                {
                    pokemon.map(el => (
                        <p>{el.name} {el.url}</p>
                    ))
                }
            </div>

            <div>
                <LogicLearn/>
            </div>
        </>
    );
}


export default Category