import { Translate, Translate_Object } from "@/Helpers/Translate"
import { Props } from "./ConfirmTypes"
import "@/Scss/Pages/Assuntocation/Confirm/Confirm.css"
import { AssuntocationElementsLangType } from "@/Lang/Types/Components/Assuntocation"
function Confirm(props:Props){
// Lang
    const ConfirmLangObj = Translate_Object("Assuntocation") as AssuntocationElementsLangType
// Small Components
    function Timer(){
        return <>
            <div className="timer">
                <div className="Bigcircle">
                    <div className="Smallcircle">
                        <p>1</p>
                    </div>
                </div>
            </div>
        </>
    }
    return(
        <div className="Confirm_Component">
            <p className="header">
                {ConfirmLangObj.Sentence["Confirm Your Email"]}
            </p>
            {<Timer/>}
            <form action="">
                <div className="inputbox">
                    <div className="label">
                        {ConfirmLangObj.Sentence["Email verification code"]}
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
                            <button>{Translate("Resend")}</button>
                            <button onClick={() => props.ChangeEmail()}>{Translate("Change")} {Translate("Email")}</button>
                        </div>
                        <button onClick={() => props.Sumbit()}>{Translate("Confirm")}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Confirm