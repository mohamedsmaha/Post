import React, { useState } from 'react'
import "@/Scss/Pages/Assuntocation/Forget/Forget.css"
import Confirm from '../HelperComponents/Confirem/Confirm'
import { CheckCircle } from '@mui/icons-material'
import FinishProcess from '../HelperComponents/FinishProcess/FinishProcess'
import { Shaps } from './ForgetTypes'
import { Translate } from '@/Helpers/Translate'
type testtype = { state_functions: { Appcontent: (value : "left" | "right") => void  }}
function Forget(props : testtype) {
  const data = [
    {id : 3 , label : "New password :" , "placeholder" : "New password" , type : "password" , check : true},
    {id : 4 , label : "Confirm password :" , "placeholder" : "Confirm password" , type : "password" , check : true},
  
  ]
  const [shap , setshap] = useState<Shaps>("First")
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
          return <ThirdShap/>
        case "Fourth":
          return <FourthShap/>

      }
    },
    Back(){
        props.state_functions.Appcontent("left")
        setTimeout(() => {
          Helper_Functions.Handel_Shap("First")
        }, 800);
    }
  }
  function FirstShap(){
    return(
      <div className="FirstShap">
        <p className='header'>Create New Password</p>
        <form action="">
          <div className="inputbox">
            <div className="label">
              {Translate("UserName")}
            </div>
            <input type="text" placeholder={`${Translate("UserName")} / ${Translate("Email")} / ${Translate("Phone")}`} />
          </div>
          <div className="buttons">
            <button onClick={() => Helper_Functions.Handel_Shap("Secound")}>{Translate("Confirm")}</button>
            <button onClick={() => props.state_functions.Appcontent("left")}>{Translate("Login")}</button>
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
  function ThirdShap(){
    return(
        <div className="ThirdShap active">
          <p className='header'>Change Password</p>
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
                <button onClick={() => Helper_Functions.Handel_Shap("Fourth")}>Change</button>
                <button type="button" onClick={() => Helper_Functions.Back()}>Login</button>
              </div>
          </form>
        </div>
    )
  }
  function FourthShap(){
      return(<FinishProcess Sumbit={Helper_Functions.Back}/>)
  }
  return (
    <div className='ForgetComponent'>
      {Helper_Functions.Shap(shap)}
    </div>
  )
}

export default Forget