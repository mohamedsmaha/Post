"use client"
import React from 'react'
import "@/Scss/Pages/Assuntocation/Login/Login.css"
import { App_links } from '@/Static_Data/Links'
import Link from 'next/link'
import { useAppSelector } from '@/Redux/Hooks'
import { Languagh } from '@/Lang/Main_file'
import { Translate } from '@/Helpers/Translate'
type testtype = { state_functions: { Appcontent: (value : "left" | "right") => void ; leftboxcomponent: (componentName:"Register" | "Forget") => void; }; }
function Login(props : testtype) {
    let Redux = {
        DefaultData : useAppSelector((state) => state.DefaultData)
    }
    
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
        <div className={`LoginComponent`}>
            <p className='header'>{Translate("Login")}</p>
            <form action="">
                <div className="inputbox">
                <div className="label">
                    <label htmlFor="UsernameInput"> {Translate("UserName")} </label>
                </div>
                <input type="text" id="UsernameInput" placeholder={`${Translate("UserName")} / ${Translate("Email")} / ${Translate("Phone")}`} />
                </div>
                <div className="inputbox">
                <div className="label">
                    <label htmlFor="PasswordInput">{Translate("Password")} </label>
                    <input type="checkbox" />
                </div>
                <input type="password" id="PasswordInput" placeholder={Translate("Password")}/>
                </div>
                <div className="buttons">
                <button type='button' onClick={() => helper_functions.Handel_RegisterButton()}>{Translate("Register")}</button>
                <button type='button' onClick={() => helper_functions.Handel_ForgetButton()}>{Translate("Forget_Password")}</button>
                </div>
                <Link href={App_links.Home}>
                    <button type="submit">{Translate("Login")}</button>
                </Link>
            </form>
        </div>
    )
}

export default Login