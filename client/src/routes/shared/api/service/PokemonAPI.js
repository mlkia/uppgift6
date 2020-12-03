import Axios from 'axios'

const PokemonAPI = Axios.create ({
  baseUrl: 'https://pokeapi.co/api/v2'
})

export default PokemonAPI