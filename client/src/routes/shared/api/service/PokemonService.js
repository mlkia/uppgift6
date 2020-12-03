import http from './PokemonAPI'

const getRandomPokemonCharacter = (userSearch) =>{
  return http.get (`/${userSearch}`)
}

export default {
  getRandomPokemonCharacter
}