"use client"
import "@/Scss/Commen/Topbar/Topbar.css"
import Main_Search_Box from '../Main_Search_Box/Main_Search_Box'
import {Home , Apps , Chat , Notifications} from "@mui/icons-material"
import { HTMLDivElementRef, HelperFunctions, Props_Types, TopbarStaticdata } from './Topbar_types'
import Link from 'next/link'
import { App_links }     from '@/Static_Data/Links'
import { Static_images } from '@/Static_Data/Images'
import { Static_Words }  from '@/Static_Data/Static_words'
import Notification from "../Notification/Notification"
import { useEffect, useRef, useState } from "react"
import { APP_Folders } from "@/Static_Data/APP_Folders"
import { User_Model } from "@/Helpers/Redux_models/Users/Users_Class"
// Descreption
    // The Topbar of the Website
// Missing
    // Number of Notifications
function Topbar(props : Props_Types) {
// Static Data
    const Static_data :TopbarStaticdata= {
        main_icons : [  
            {id : 1 , name : "Home"         , icon : <Home/>          , find : "Both"         , link :App_links.Home()},
            {id : 2 , name : "Notifications", icon : <Notifications/> , find : "Both" , link :App_links.Home()},
            {id : 3 , name : "Chat"         ,icon : <Chat/>          , find  : "Both"  , link :App_links.Home()},
            {id : 4 , name : "Notifications", icon : <Notifications/> , find : "Both" , link :App_links.Home()},
            {id : 5 , name : "Chat"         ,icon : <Chat/>          , find  : "Both"  , link :App_links.Home()},
        ],
        left_icons:[
            {id:1 , name : "Setting"                 , icon : <Apps/>          },
            {id:2 , name : "Chat"                    , icon : <Chat/>          },
            {id:3 , name : "Notifications"           , icon : <Notifications/> },
        ]
    }
// Hooks
    const [Notification_Box_Status , SetNotificationBox ] = useState<boolean>(false)
    const Notification_Box_Ref :  HTMLDivElementRef        = useRef(null)
// Helper Functions
    const Helper_Functions : HelperFunctions = {
        Left_icon_click(name){
            switch(name){
                case "Notifications" :
                    SetNotificationBox(!Notification_Box_Status)
                default :
                    return ;
            }
        },
        Is_that_Actice(name) {
            switch(props.Page){
                case  "Home" : {
                    if(name == "Home"){return true}
                    break
                }
                default :
                    return false
            }
            return false
        },
    };
// // UseEffect
    useEffect(() => {
        const HandleClickOutside = (event: MouseEvent) => {
            if (Notification_Box_Ref.current && Notification_Box_Status &&
                !Notification_Box_Ref.current.contains(event.target as Node)) 
            {
                SetNotificationBox(false)
            }
        };// Close the Notification Box if the click is not on it
        document.addEventListener("click", HandleClickOutside);
        return () => {
            document.removeEventListener("click", HandleClickOutside);
        };
    }, [Notification_Box_Status]);
// Small Components
    function Logo_And_Search(){
        return(
            <div className='Logo_And_Search'>
                <div className="Logo">
                    <img src={`${Static_images.main_logo}`} alt="" />
                    <p>{Static_Words().App_name}</p>
                </div>
                <Main_Search_Box/>
            </div>
        )
    }
    function Main_Links(){
        return(
            <div className="Main_Links">
                {Static_data.main_icons.map(item => (
                    <Link href={`${item.link}`} className={`Icon ${item.find}
                                                            ${Helper_Functions.Is_that_Actice(item.name) ? "Active" :''}`}
                                                key = {item.id}>{item.icon}</Link>
                ))}
            </div>
        )
    }
    function Left_Icons(){
        return(
            <div className="Left_Icons">
                {Static_data.left_icons.map(item => (
                    <div className="Icon" key={item.id} onClick={() => {Helper_Functions.Left_icon_click(item.name)}}>{item.icon}</div>
                ))}
                <div className=" Icon Profileicon"><Link href={`${App_links.Profile(User_Model.GetId())}`}><img src={`${APP_Folders.Users()}/${User_Model.GetMainImg()}`} alt="" /></Link></div>
            </div>
        )
    }
    function Notification_Box(){
        return (
            <div className="Notification_Container" ref = {Notification_Box_Ref}
                                                    style={{display : Notification_Box_Status ? "flex" : "none"}}>
                <Notification/>
            </div>
        )
    }
    return (
        <div className={`Topbar_Component`}>
            <Logo_And_Search/>
            <Main_Links/>
            <Left_Icons/>
            <Notification_Box/>
        </div>
    )
}


    export default Topbar