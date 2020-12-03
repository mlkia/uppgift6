import React, {useState, useContext } from 'react'
import './NavigationBar.css'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../utils/context/UserContext'
import { Profile } from '../profile/Profile'
import {useLocation} from 'react-router-dom'

export const NavigationBar = () => {
    const history = useHistory();
    const location = useLocation();
    const [loggedInUser, setLoggedinUser] = useContext(UserContext)
    
    const doNotDisplaySignInIfAtSignIn = ()=>{
        return location.pathname === "/signin" 
        ? <div></div>
        : <button className="signbutton" onClick={() => history.push("/signin")}> Sign In</button>
    }


    const doNotDisplaySignUpIfAtSignUp = ()=>{
        return location.pathname === "/signup"
        ? <div></div>
        : <h3 className="signuplink" onClick={() => history.push("/signup")}>Sign up</h3>
    }


    const displayUserEmailIfAuthenticated = () => {
        return loggedInUser 
            ?<div className="signin"> <Profile /> </div>
            : doNotDisplaySignInIfAtSignIn ()
    }

    return (
        <div className="navigationBarContainer">
            <input className="search"></input>
                <i className='fas'>&#xf002;</i>
            <h1 className="navigationBarLogotype" onClick={() => history.push("/")}>Rent my stuff</h1>
                        {displayUserEmailIfAuthenticated()}
                        {doNotDisplaySignUpIfAtSignUp()}
        </div >
    )
}