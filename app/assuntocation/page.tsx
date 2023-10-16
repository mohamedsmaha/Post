"use client"
import { Static_images } from "@/Static_Data/Images";
import "@/Scss/Pages/Assuntocation/Assuntocation.css"
import Login from "@/Components/Pages/assuntocation/Login/Login";
import Register from "@/Components/Pages/assuntocation/Register/Register";
import { Component, useState } from "react";
import Forget from "@/Components/Pages/assuntocation/Forget/Forget";
import { useAppSelector } from "@/Redux/Hooks";
import { Static_Words } from "@/Static_Data/Static_words";
export default function login() {
    let Redux = {
        DefaultData : useAppSelector((state) => state.DefaultData)
    }
    
  const [Appcontent, setAppcontent] = useState<null | "right" | "left">(null); 
  const [leftboxcomponent , setleftboxcomponent] = useState<React.ReactNode | null>(null)

  const helper_functions = {
    Handel_appcontent(value : "right" | "left"){
        setAppcontent(value)
    } ,
    Handel_leftbox_component(componentName:"Register" | "Forget"){
      if(componentName == "Register"){setleftboxcomponent(<Register state_functions={{ Appcontent: helper_functions.Handel_appcontent }}/>)}
      else{setleftboxcomponent(<Forget state_functions={{ Appcontent: helper_functions.Handel_appcontent }}/>)}
    }
  }

  return (
    <div className="AssuntocationPage">
      <img src={Static_images.Wave} alt=""  className="Wave"/>
      <div className="Box">
        <div className={`container `}>
          <div className={`Appcontent  ${Appcontent}`}>
            <img src={Static_images.secound_logo} alt="" />
            <p className="slogan">{Static_Words().App_slogan}</p>
          </div>
          <div className={`leftbox ${Appcontent == "right" ? "active" :  ''} `}>
            {leftboxcomponent}
          </div>
          <div className={`rightbox ${Appcontent == null  || Appcontent == "left" ? "active" :  ''}`}>
            <Login state_functions={{ Appcontent: helper_functions.Handel_appcontent, leftboxcomponent: helper_functions.Handel_leftbox_component }} />
          </div>
        </div>
      </div>
      <img src={Static_images.Wave} alt=""  className="Wave Bottom"/>
    </div>
    );
}
