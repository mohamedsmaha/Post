"use client"
import React from "react"
import "@/Scss/Pages/Assuntocation/Register/Register.css"
import { useState } from "react"
import ConfiremData from "../ConfiremData/ConfiremData"
import SuccessProcess from "../SuccessProcess/SuccessProcess"
import { Translate, Translate_Object } from "@/Helpers/Translate"
import { AssuntocationElementsLangType } from "@/Lang/Types/Components/Assuntocation"
import { Propstype, Shaps, Static_Data } from "./Registertypes"
function Register(props : Propstype) {
// Props
    const {state_functions} = props
// Lang
    const RegisterLangObj = Translate_Object("Assuntocation") as AssuntocationElementsLangType
// Hooks
    const [shap , setshap] = useState<Shaps>("First")
// Static Data
    const Static_Data : Static_Data = {
      Create_account_inputs : [
        {id : 1 , label : Translate("Email")      , placeholder : Translate("Email")    , type : "text"},
        {id : 2 , label : Translate("UserName")   , placeholder : Translate("UserName") , type : "text"},
        {id : 3 , label : Translate("Password")   , placeholder : Translate("Password") , type : "password" , check : true},
        {id : 4 , label : `${Translate("Confirm")} ${Translate("Password")}` , placeholder : `${Translate("Confirm")} ${Translate("Password")}` , type : "password" , check : true},
        {id : 5 , label : Translate("BirthDay")    , type : "date"}
      ] 
    }
// Helper Functions
    const Helper_Functions = {
        Handel_Shap(shap:Shaps){
          setshap(shap)
          
        },
        Shap(shap : Shaps){
          switch(shap){
            case "First" :
              return <FirstShap/>
            case "Secound":
              return <SecoundShap/>
            case "Third":
              return <Thirdshap/>
          }
        },
        ThiredShapButtonSubmit(){
          state_functions.Appcontent("left")
          setTimeout(() => {
            Helper_Functions.Handel_Shap("First")
          }, 1000);
        }
      }
// Small Componetns
    function FirstShap(){
        return(
          <div className="FirstShap">
            <p className='header'>{Translate("Register")}</p>
            <form action="">
                  {Static_Data.Create_account_inputs.map(item => (
                    <div className="inputbox" key = {item.id}>
                      <div className="label">
                          <label htmlFor={`${item.label}input`}>{item.label}</label>
                          {item.check ? <input type="checkbox"/> : null}
                      </div>
                      <input type={item.type} id={`${item.label}input`} placeholder={item.placeholder ? item.placeholder : ''} />
                    </div>
                  ))}
                  <div className="buttons">
                    <button onClick={() => Helper_Functions.Handel_Shap("Secound")}>{Translate("Create")}</button>
                    <button type="button" onClick={() => state_functions.Appcontent("left")}>{Translate("Login")}</button>
                  </div>
            </form>
          </div>
        )
    }
    function SecoundShap(){
      return(
          <ConfiremData ChangeEmail={() => {Helper_Functions.Handel_Shap("First")}} Sumbit={() => Helper_Functions.Handel_Shap("Third")}/>
      )
    }
    function Thirdshap(){
        return(<SuccessProcess Text  ={RegisterLangObj.Sentence["Your account has been successfully created"]} 
                              Sumbit={Helper_Functions.ThiredShapButtonSubmit}/>)
    }
    return (
        <div className="Register_Component active">
            <div className="container">
                {Helper_Functions.Shap(shap)}
            </div>
        </div>
    )
}
  
export default Register