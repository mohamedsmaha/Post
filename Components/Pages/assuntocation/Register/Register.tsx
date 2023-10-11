"use client"
import "@/Scss/Pages/Assuntocation/Register/Register.css"
import { CheckCircle, RampRight } from "@mui/icons-material"
import { useState } from "react"
import Confirm from "../HelperComponents/Confirem/Confirm"
import FinishProcess from "../HelperComponents/FinishProcess/FinishProcess"
import { Translate } from "@/Helpers/Translate"
type testtype = { state_functions: { Appcontent: (value : "left" | "right") => void  }}
function Register(props : testtype) {
  const [shap , setshap] = useState<"First" | "Secound" | "Third">("First")
  const data = [
    {id : 1 , label : Translate("Email") , "placeholder" : Translate("Email")    , type : "text"},
    {id : 2 , label : Translate("UserName") , "placeholder" : Translate("UserName") , type : "text"},
    {id : 3 , label : Translate("Password") , "placeholder" : Translate("Password") , type : "password" , check : true},
    {id : 4 , label : `${Translate("Confirm")} ${Translate("Password")}` , "placeholder" : `${Translate("Confirm")} ${Translate("Password")}` , type : "password" , check : true},
    {id : 5 , label : Translate("BirthDay")    , type : "date"}
  
  
  
  ]
  const Helper_Functions = {
      Handel_Shap(shap:"First" | "Secound" | "Third"){
        setshap(shap)
        
      },
      Shap(shap : "First" | "Secound" | "Third"){
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
        props.state_functions.Appcontent("left")
        setTimeout(() => {
          Helper_Functions.Handel_Shap("First")
        }, 1000);
      }
    }
    function FirstShap(){
        return(
          <div className="FirstShap">
            <p className='header'>{Translate("Register")}</p>
            <form action="">
                  {data.map(item => (
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
                  <button type="button" onClick={() => props.state_functions.Appcontent("left")}>{Translate("Login")}</button>
                </div>
            </form>
          </div>
        )
    }
    function SecoundShap(){
      return(
          <Confirm ChangeEmail={() => {Helper_Functions.Handel_Shap("First")}} Sumbit={() => Helper_Functions.Handel_Shap("Third")}/>
      )
    }
    function Thirdshap(){
        return(<FinishProcess Sumbit={Helper_Functions.ThiredShapButtonSubmit}/>)
    }
    return (
        <div className="RegisterComponent active">
            <div className="container">
                {Helper_Functions.Shap(shap)}
            </div>
        </div>
    )
}

export default Register