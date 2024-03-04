"use client"
import React, { useState } from 'react'
import "@/Scss/Pages/Assuntocation/Login/Login.css"
import { Translate } from '@/Helpers/Translate'
import { propstype } from './Logintypes'
import { redirect } from 'next/navigation'
import { useAppDispatch} from '@/Redux/Hooks'
import { default_data_model } from '@/Helpers/Redux_models/Deafult_data/Deafult_data_class'
import { Login_change } from '@/Redux/UnFetched_data/Deafult_data/Default_dataRedux'
import { User_Login_Request } from '@/Redux/Modules/User/UserTypes'
import { User_Model } from '@/Helpers/Redux_models/Users/Users_Class'
function Login(props : propstype) {
// Props
    const {state_functions} = props
// Redux 
    let Redux = {
        default_data : default_data_model ,
        User_Model   : User_Model
    }
    const dispatch = useAppDispatch();
// Hooks 
    const [Inputs_Filed , setInputsFiled ]=useState<User_Login_Request>({UserName : '' , Password : ''})
    const [passwordType , setpasswordtype] = useState<"Text" | "Password">("Password")
// Helper Functions
    const Helper_Functions = {
        Handel_RegisterButton(){
            state_functions.Appcontent("right")
            state_functions.leftboxcomponent("Register")
        } ,
        Handel_ForgetButton(){
            state_functions.Appcontent("right")
            state_functions.leftboxcomponent("Forget")
        } ,
        Handel_Inputs_Filed(  event : React.ChangeEvent<HTMLInputElement> , type : "UserName" | "Password"){
            const target = event.target as HTMLInputElement;
            const value = target.value;
            if(type  == "UserName"){
                setInputsFiled({...Inputs_Filed , UserName : value})
            }
            else if(type == "Password"){
                setInputsFiled({...Inputs_Filed , Password : value})
            }
        } ,
        Handel_passwordtype(){
            if(passwordType == "Password"){setpasswordtype("Text")}
            else{setpasswordtype("Password")}
        } ,
        Handel_LoginButton : ()=>{
            Redux.User_Model.Check_Login( dispatch ,Inputs_Filed)
            // dispatch(Login_change(true));
        }
    }

    return (
        <div className={`Login_Component`}>
            {Redux.default_data.GetLogin() ? redirect("http://localhost:3000/") : null}
            <p className='header'>{Translate("Login")}</p>
            <form action="">
                <div className="inputbox">
                    <div className="label">
                        <label htmlFor="UsernameInput"> {Translate("UserName")} </label>
                    </div>
                    <input type="text" id="UsernameInput" placeholder={`${Translate("UserName")} / ${Translate("Email")} / ${Translate("Phone")}`}  
                            autoComplete="current-username" value={Inputs_Filed.UserName} 
                            onChange={(e) => Helper_Functions.Handel_Inputs_Filed(e , "UserName")}/>
                </div>
                <div className="inputbox">
                    <div className="label">
                        <label htmlFor="PasswordInput">{Translate("Password")} </label>
                        <input type="checkbox" defaultChecked={false} onClick={() => {Helper_Functions.Handel_passwordtype()}}/>
                    </div>
                    <input type={passwordType} id="PasswordInput" placeholder={Translate("Password")} 
                        autoComplete="current-password" value={Inputs_Filed.Password} 
                        onChange={(e) => Helper_Functions.Handel_Inputs_Filed(e , "Password")} />
                </div>
                <div className="buttons">
                    <button type='button' onClick={() => Helper_Functions.Handel_RegisterButton()}>{Translate("Register")}</button>
                    <button type='button' onClick={() => Helper_Functions.Handel_ForgetButton()}>{Translate("Forget_Password")}</button>
                </div>
                <button type="button" onClick={Helper_Functions.Handel_LoginButton}>{Translate("Login")}</button>
            </form>
        </div>
    )
}

export default Login