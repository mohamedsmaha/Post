import { Translate } from "@/Helpers/Translate"
import { Props } from "./ConfirmTypes"
import "@/Scss/Pages/Assuntocation/Confirm/Confirm.css"
function Confirm(props:Props){
    return(
        <div className="ConfirmComponent">
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