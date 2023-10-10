import React from 'react'
import "@/Scss/Pages/Assuntocation/Login/Login.css"
import { App_links } from '@/Static_Data/Links'
import Link from 'next/link'
import { Dispatch } from 'react'
import { SetStateAction } from 'react'
type testtype = { state_functions: { Appcontent: (value : "left" | "right") => void ; leftboxcomponent: (componentName:"Register" | "Forget") => void; }; }
function Login(props : testtype) {
    const helper_functions = {
        Handel_RegisterButton(){
            props.state_functions.Appcontent("right")
            props.state_functions.leftboxcomponent("Register")
        } ,
        Handel_ForgetButton(){
            props.state_functions.Appcontent("right")
            props.state_functions.leftboxcomponent("Forget")
        }
    }
    return (
        <div className="LoginComponent">
            <p className='header'>Login</p>
            <form action="">
                <div className="inputbox">
                <div className="label">
                    <label htmlFor="UsernameInput">Username : </label>
                </div>
                <input type="text" id="UsernameInput" placeholder="UserName / Email / Number" />
                </div>
                <div className="inputbox">
                <div className="label">
                    <label htmlFor="PasswordInput">Password : </label>
                    <input type="checkbox" />
                </div>
                <input type="password" id="PasswordInput" placeholder="Password"/>
                </div>
                <div className="buttons">
                <button type='button' onClick={() => helper_functions.Handel_RegisterButton()}>Register</button>
                <button type='button' onClick={() => helper_functions.Handel_ForgetButton()}>forget password</button>
                </div>
                <Link href={App_links.Home}>
                    <button type="submit">login</button>
                </Link>
            </form>
        </div>
    )
}

export default Login