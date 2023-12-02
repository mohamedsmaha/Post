import { Translate, Translate_Object } from "@/Helpers/Translate"
import { Helper_Functions, Props } from "./ConfiremDataTypes"
import "@/Scss/Pages/Assuntocation/Confirm/Confirm.css"
import { AssuntocationElementsLangType } from "@/Lang/Types/Components/Assuntocation"
import { useState } from "react"
// Description
// it takes the Number to confirm if the owner has that Email or phone
function ConfirmData(props:Props){
// Hooks 
    const [verification , setverification] = useState<(undefined | number)[]>(Array(5).fill(undefined))
// Lang
    const ConfirmLangObj = Translate_Object("Assuntocation") as AssuntocationElementsLangType
// Helepr Functions
    const Helper_Functions:Helper_Functions = {
        Handel_verification_State(number, index) {
            let arr    = verification
            arr[index] = parseInt(number)
            setverification(arr)
        },
    }
// Small Components
    function Timer(){
        return <>
            <div className="Timer">
                <div className="Bigcircle">
                    <div className="Smallcircle">
                        <p>1</p>
                    </div>
                </div>
            </div>
        </>
    }
    function Buttons(){
        return <>
            <div className="Buttons">
                <div className="Firstlevelbuttons">
                    <button>{Translate("Resend")}</button>
                    <button onClick={() => props.ChangeEmail()}>{Translate("Change")} {Translate("Email")}</button>
                </div>
                <button className="SecoundLevelButtons" onClick={() => props.Sumbit()}>{Translate("Confirm")}</button>
            </div>
        </>
    }
    function InputBox(){
        return<>
            <div className="Inputbox">
                <div className="Label">
                    {ConfirmLangObj.Sentence["Email verification code"]}
                </div>
                <div className="Inputs">
                {verification.map((item , index) => (
                    <input key={index} type="number" value={item} onChange={(e) => Helper_Functions.Handel_verification_State(e.target.value , index)} />
                ))}
                </div>
                <Buttons/>
            </div>
            </>
    }
    return(
        <div className="Confirm_Component">
            <p className="Header">
                {ConfirmLangObj.Sentence["Confirm Your Email"]}
            </p>
            <Timer/>
            <InputBox/>
        </div>
    )
}
export default ConfirmData