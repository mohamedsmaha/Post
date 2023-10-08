"use client"
import { Static_images } from "@/Static_Data/Images";
import "@/Scss/Pages/Assuntocation/Assuntocation.css"
import Login from "@/Components/Pages/assuntocation/Login/Login";
import Register from "@/Components/Pages/assuntocation/Register/Register";
import { Component, useState } from "react";
import Forget from "@/Components/Pages/assuntocation/Forget/Forget";
export default function login() {
  const [Appcontent, setAppcontent] = useState<null | "right" | "left">(null); 
  const [leftboxcomponent , setleftboxcomponent] = useState<React.ReactNode>(<Register/>)

  const helper_functions = {
    Handel_appcontent(value : "right" | "left"){
        setAppcontent(value)
    } ,
    Handel_leftbox_component(componentName:"Register" | "Forget"){
      if(componentName == "Register"){setleftboxcomponent(<Register/>)}
      else{setleftboxcomponent(<Forget/>)}
    }
  }
  return (
    <div className="LoginPage">
      <img src={Static_images.Wave} alt=""  className="Wave"/>
      <div className="Box">
        <div className="container">
          <div className={`Appcontent  ${Appcontent}`}>
            <img src={Static_images.secound_logo} alt="" />
            <p className="slogan">What a better society should be like </p>
          </div>
          <div className="leftbox">
            {leftboxcomponent}
          </div>
          <div className="rightbox">
            <Login state_functions={{ Appcontent: helper_functions.Handel_appcontent, leftboxcomponent: helper_functions.Handel_leftbox_component }} />
          </div>
        </div>
      </div>
      <img src={Static_images.Wave} alt=""  className="Wave Bottom"/>
    </div>
    );
}
