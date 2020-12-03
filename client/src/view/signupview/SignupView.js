import React, {useState} from 'react'
import  { useHistory } from 'react-router-dom'
import APIService from '../../utils/api/service/APIService'

export const SignupView = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [userName, setUsername] = useState ("")
  const [passWord, setPassWord] = useState("")
  const [email, setEmail] = useState("")
  const [mobil, setMobil] = useState("")


  const submitInformation = async () => {
        
    await APIService.createNewUser({
        firstname:firstName,
        username:userName,
        password:passWord
    })
    
}
  

  return(
    <div>
      <h1>This is Signup page</h1>
      <h4>Signup</h4>
      <span>First name:</span> <br />
          <input onChange={e => setFirstName(e.target.value)} /> <br />
        <span>User name:</span> <br />
          <input onChange={e => setUsername(e.target.value)} /> <br />
        <span>password:</span> <br />
          <input type='password' onChange={e => setPassWord(e.target.value)} /> <br />

      <button onClick={() => submitInformation()}>Submit</button>
    </div>
  )
}




