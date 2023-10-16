"use client"
import { EmojiEmotions ,More, PermMedia} from "@mui/icons-material"
import "@/Scss/Commen/Share/Share.css"
import React from "react"
import { useAppSelector } from "@/Redux/Hooks"
import { Languagh } from "@/Lang/Main_file"
import { Translate_Object } from "@/Helpers/Translate"
import { ShareElementsLangType } from "@/Lang/Types/Components/Share"

function Share() {
    let Redux = {
        DefaultData : useAppSelector((state) => state.DefaultData)
    }
    const options  = [
    {id : 1 , text : `${Languagh[Redux.DefaultData.Lang].Photo} / ${Languagh[Redux.DefaultData.Lang].Videos}`, icon : <PermMedia htmlColor="tomato"/>} ,
    {id : 4 , text : `${Languagh[Redux.DefaultData.Lang].Feelings} / ${Languagh[Redux.DefaultData.Lang].Activity}`    , icon : <EmojiEmotions htmlColor="goldenrod"/>},
    {id : 3 , text : `${Languagh[Redux.DefaultData.Lang].More}`      , icon : <More htmlColor="green"/>}
] 
    function Shareoptions () {
        return(
                <ul className="shareoptions">
                    {options.map(item => (
                        <li  className="item" key={item.id}>
                            {item.icon}
                            <span className="text">{item.text}</span>
                        </li>
                    ))}
                </ul>
        )
    }
    const ShareLangObj= Translate_Object("Share") as ShareElementsLangType;
    return (    
        <div className={`share`}>
                <div className="sharetop">
                    <img src="./assets/persons/1.jpeg" alt="" className="shareprofileimg" />
                    <input type="text" className="shareInput"  placeholder={`${ShareLangObj.InputFiled("mohamed")}`}/>
                </div>
                <hr className="sharehr" />
                {<Shareoptions/>}
            <div className="shareWrapper">

            </div>
        </div>
    )
}

export default Share