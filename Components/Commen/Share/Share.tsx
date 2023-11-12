"use client"
import { EmojiEmotions ,More, PermMedia} from "@mui/icons-material"
import "@/Scss/Commen/Share/Share.css"
import React from "react"
import { useAppSelector } from "@/Redux/Hooks"
import { Languagh } from "@/Lang/Main_file"
import { Translate, Translate_Object } from "@/Helpers/Translate"
import { ShareElementsLangType } from "@/Lang/Types/Components/Share"
import { Props_type } from "./ShareTypes"
import { User, User_Model } from "@/Helpers/Redux_models/Users/Users_Class"
import { Profile_Model } from "@/Helpers/Redux_models/Profile/Profile_Class"
import { APP_Folders } from "@/Static_Data/APP_Folders"

function Share(props : Props_type) {
// Models
    const UserModel :() => User  = ()=>{
        if(props.Page == "Profile"){return Profile_Model.GetUser()}
        return User_Model
    }
// Lang
    const ShareLangObj= Translate_Object("Share") as ShareElementsLangType;
// Static Data in App
    const Static_Data = {
        Options : [
            {id : 1 , text : `${Translate("Photo")} / ${Translate("Videos")}`         , icon : <PermMedia htmlColor="tomato"/>} ,
            {id : 2 , text : `${Translate("Feelings")} / ${Translate("Activity")}`    , icon : <EmojiEmotions htmlColor="goldenrod"/>},
            {id : 3 , text : `${Translate("More")}`                                   , icon : <More htmlColor="green"/>}
        ] 
    }
// Small Components
    function Shareoptions () {
        return(
                <ul className="shareoptions">
                    {Static_Data.Options.map(item => (
                        <li  className="item" key={item.id}>
                            {item.icon}
                            <span className="text">{item.text}</span>
                        </li>
                    ))}
                </ul>
        )
    }
    return (    
        <div className={`Share_Component`}>
                <div className="sharetop">
                    <img src={`${APP_Folders.Users()}/${UserModel().GetMainImg()}`} alt="" className="shareprofileimg" />
                    <input type="text" className="shareInput"  placeholder={`${ShareLangObj.InputFiled(UserModel().GetName())}`}/>
                </div>
                <hr className="sharehr" />
                {<Shareoptions/>}
        </div>
    )
}

export default Share