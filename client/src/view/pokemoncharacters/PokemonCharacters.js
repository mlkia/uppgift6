import React, {useState} from 'react'
import Axios from 'axios'
import {Search} from '../../components/search/Search'


export const PokemonCharacters = () => {
  const [data, setData] = useState()
  const [searchinput, setSearchInput]= useState()

  const fetchDataFromExternalAPI = () => {
    Axios.get (`https://pokeapi.co/api/v2/pokemon/${searchinput.toLowerCase()}`)
    .then((Response) => setData(Response.data))
    .catch((error) => console.log(error))
}

const disPlayData = () => {
  if (data) {
    return <div>
    <h3>Id: {data.id}</h3>
    <h3>name: {data.name}</h3>
    <h3>Height: {data.height} m</h3>
    <h3>Weight: {data.weight} g</h3>
    <h3>Type: {data.types[0].type.name}</h3>
    <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${data.id}.png`} alt=""/>
    </div>
  }
}

const makeAPIButton =() =>{
  return <div>
    <span>Search Pokémon Characters </span>
    <br/>
    <input onChange={(event) => setSearchInput(event.target.value)}></input>

    <button onClick={() => fetchDataFromExternalAPI()}>Search</button>
      {disPlayData()}
  </div>
}
  
  return (

      <div>
      
      {makeAPIButton()}
      
      </div>
  )
}