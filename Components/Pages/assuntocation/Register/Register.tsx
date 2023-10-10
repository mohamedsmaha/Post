"use client"
import "@/Scss/Pages/Assuntocation/Register/Register.css"
import { RampRight } from "@mui/icons-material"
import { useState } from "react"
const data = [
  {id : 1 , label : "Email :" , "placeholder" : "Email" , type : "text"},
  {id : 3 , label : "Username :" , "placeholder" : "Username" , type : "text"},
  {id : 4 , label : "password :" , "placeholder" : "password" , type : "password" , check : true},
  {id : 2 , label : "birthday :" , "placeholder" : "Email" , type : "date"}



]
type testtype = { state_functions: { Appcontent: (value : "left" | "right") => void  }}
function Register(props : testtype) {
    const [shap , setshap] = useState<"First" | "Secound" | "Third">("First")
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
      }
    }
    function FirstShap(){
        return(
          <div className="FirstShap">
            <p className='header'>Register</p>
            <form action="">
                  {data.map(item => (
                    <div className="inputbox" key = {item.id}>
                      <div className="label">
                          <label htmlFor={`${item.label}input`}>{item.label}</label>
                          {item.check ? <input type="checkbox"/> : null}
                      </div>
                      <input type={item.type} id={`${item.label}input`} placeholder={item.placeholder} />
                    </div>
                  ))}
                <div className="buttons">
                  <button onClick={() => Helper_Functions.Handel_Shap("Secound")}>create</button>
                  <button type="button" onClick={() => props.state_functions.Appcontent("left")}>Login</button>
                </div>
            </form>
          </div>
        )
    }
    function SecoundShap(){
      return(
            <div className="SecoundShap">
                <p className="header">confirm your email</p>
                <div className="timer">
                  <div className="Bigcircle">
                    <div className="Smallcircle">
                      <p>1</p>
                    </div>
                  </div>
                </div>
                <form action="">
                      <div className="inputbox">
                        <div className="label">
                          Email verification code
                        </div>
                        <div className="inputs">
                          <input type="number"  />
                          <input type="number"  />
                          <input type="number"  />
                          <input type="number"  />
                          <input type="number"  />
                          <input type="number"  />
                        </div>
                        <div className="buttons">
                                                    <div className="firstlevelbuttons">
                          <button>Resend</button>
                          <button onClick={() => Helper_Functions.Handel_Shap("First")}>change email</button>
                        </div>
                        
                        <button onClick={() => Helper_Functions.Handel_Shap("Third")}>sumbit</button>
                        </div>
                      </div>
                </form>
            </div>
      )
    }
    function Thirdshap(){
      return(
        <div className="ThiredShap">
          <button  onClick={() => 
          {props.state_functions.Appcontent("left")
            setTimeout(() => {
              Helper_Functions.Handel_Shap("First")
            }, 1000);
        }
            
            }>Login</button>
        </div>
        )
    }
    return (
        <div className="RegisterComponent">
            <div className="container">
                {Helper_Functions.Shap(shap)}
            </div>
        </div>
    )
}

export default Register