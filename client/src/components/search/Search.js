import React, {useState} from 'react'
import PokemonService from '../../routes/shared/api/service/PokemonService'
import './Search.css'


export const Search = () => {
  const [search, setSearch] = useState ("")
  const [result, setRecult] = useState ([
    {name: "Malik", rating: 10},
    {name: "Sohaib", rating: 10},
    {name: "Yaman", rating: 10},
    {name: "Zaid", rating: 10},
  ])
      
  const displayResults = () => {
    if (search.length < 1) {
      return <div className="dropdown-content"></div>
    } else {
      return <div className="dropdown-content">
        {result.map(x =>(
          <div className="dropdown-value">
            <img src={"https://thispersondoesnotexist.com/image"} 
                  alt="" 
                style={{width: '50px'}} />
              <span>{x.name}</span> 
        </div>
      ))}
    </div> 

    }

  }

  return (
      <div>
        <input
            className="TBA"
            onChange={(event) => setSearch(event.target.value)}
            placeholder="search.."/>
          {displayResults()}
      </div>
  )
}