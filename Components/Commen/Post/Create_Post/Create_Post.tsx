"use client"
import { EmojiEmotions ,More, PermMedia} from "@mui/icons-material"
import "@/Scss/Commen/Post/CreatePost/CreatePost.css"
import React, { useEffect, useState } from "react"
import { Translate, Translate_Object } from "@/Helpers/Translate"
import { CreatePostElementsLangType } from "@/Lang/Types/Components/CreatePost"
import { Props_type } from "./CreateTypes"
import { User, User_Model } from "@/Helpers/Redux_models/Users/Users_Class"
import { Profile_Model } from "@/Helpers/Redux_models/Profile/Profile_Class"
import { APP_Folders } from "@/Static_Data/APP_Folders"
import Form from "./Form/Form"

function CreatePost(props : Props_type) {
// Models
    const UserModel :() => User  = ()=>{
        if(props.Page == "Profile"){return Profile_Model.GetUser()}
        return User_Model
    }
// Lang
    const CreatePostObj= Translate_Object("CreatePost") as CreatePostElementsLangType;
// Hooks 
    const [Form_Status , SetForm_Status] = useState<Boolean>(false)
// Static Data in App
    const Static_Data = {
        Options : [
            {id : 1 , text : `${Translate("Photo")} / ${Translate("Videos")}`         , icon : <PermMedia htmlColor="tomato"/>} ,
            {id : 2 , text : `${Translate("Feelings")} / ${Translate("Activity")}`    , icon : <EmojiEmotions htmlColor="goldenrod"/>},
            {id : 3 , text : `${Translate("More")}`                                   , icon : <More htmlColor="green"/>}
        ] 
    }
// Small Components
    function Createoptions () {
        return(
                <ul className="Createoptions">
                    {Static_Data.Options.map(item => (
                        <li  className="item" key={item.id}>
                            {item.icon}
                            <span className="text">{item.text}</span>
                        </li>
                    ))}
                </ul>
        )
    }
// Main Create Form

    return (  
        <>
        
        <div className={`Create_Component`} onClick={() => SetForm_Status(true)}>
                <div className="Create_top">
                    <img src={`${APP_Folders.Users()}/${UserModel().GetMainImg()}`} alt="" className="Createprofileimg" />
                    <p className="text">{CreatePostObj.InputFiled(UserModel().GetName())}</p>
                </div>
                <hr className="Createhr" />
                {<Createoptions/>}
        </div>
                {Form_Status ? <Form Close={() => SetForm_Status(false)}/> : null}
        </>  
    )
}

export default CreatePost