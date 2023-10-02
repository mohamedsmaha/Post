"use client"
import {useState , useEffect} from 'react'
import "@/Scss/Commen/Topbar/Topbar.css"
import Main_Search_Box from '../Main_Search_Box/Main_Search_Box'
import {Home , Apps , Chat , Notifications} from "@mui/icons-material"

function Topbar() {
    function Logo_Search(){
        return(
            <div className='Logo_Search'>
                <div className="brand">
                    <img src="./assets/Static_images/logo1.png" alt="" />
                    <p>Post</p>
                </div>
                <Main_Search_Box/>
            </div>
        )
    }
    function Main_Links(){
        return(
            <div className="Main_Links">
                <div className="Home icon"><Home/></div>
                <div className="Home icon active"><Home/></div>
                <div className="Home icon"><Home/></div>
                <div className="Home icon"><Home/></div>
                <div className="Home icon"><Home/></div>
            </div>
        )
    }
    function Left_Icons(){
        return(
            <div className="Left_Icons">
                <div className="Menu"><Apps/></div>
                <div className="Chat"><Chat/></div>
                <div className="Notifitcation"><Notifications/> </div>
                <div className="profile"><img src="/assets/persons/1.jpeg" alt="" /></div>
            </div>
        )
    }
    return (
        <div className='Topbar_component ColorTheme_1'>
            <Logo_Search/>
            <Main_Links/>
            <Left_Icons/>
        </div>
    )
}


export default Topbar