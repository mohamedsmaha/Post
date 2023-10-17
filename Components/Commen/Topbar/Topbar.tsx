"use client"
import "@/Scss/Commen/Topbar/Topbar.css"
import Main_Search_Box from '../Main_Search_Box/Main_Search_Box'
import {Home , Apps , Chat , Notifications} from "@mui/icons-material"
import { TopbarStaticdata  } from './Topbar_types'
import Link from 'next/link'
import { App_links }     from '@/Static_Data/Links'
import { Static_images } from '@/Static_Data/Images'
import { Static_Words }  from '@/Static_Data/Static_words'

function Topbar() {
// Static Data
    const Static_data :TopbarStaticdata= {
        main_icons : [  
            {id : 1 , icon : <Home/>          , find : "both"         , link :App_links.Home},
            {id : 2 , icon : <Notifications/> , find : "small_screen" , link :App_links.Home},
            {id : 7 , icon : <Chat/>          , find : "small_screen" , link :App_links.Home},
            {id : 3 , icon : <Home/>          , find : "both"         , link :App_links.Home},
            {id : 4 , icon : <Home/>          , find : "both"         , link :App_links.Home},
            {id : 5 , icon : <Home/>          , find : "big_screen"   , link :App_links.Home},
            {id : 6 , icon : <Home/>          , find : "big_screen"   , link :App_links.Home},
        ],
        left_icons:[
            {id:1 , name : "App"                 , icon : <Apps/>          },
            {id:2 , name : "Chat"                , icon : <Chat/>          },
            {id:3 , name : "Notifications"       , icon : <Notifications/> },
        ]
    }
// Helper Functions
    const Helper_Functions = {
        Left_icon_click: (name: string) => {
            console.log(name);
        }
    };
// Small Components
    function Logo_Search(){
        return(
            <div className='Logo_Search'>
                <div className="brand">
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
                    <Link href={`${item.link}`} className={`icon ${item.find}`} key = {item.id}>{item.icon}</Link>
                ))}
            </div>
        )
    }
    function Left_Icons(){
        return(
            <div className="Left_Icons">
                {Static_data.left_icons.map(item => (
                    <div className="icon" key={item.id} onClick={() => {Helper_Functions.Left_icon_click(item.name)}}>{item.icon}</div>
                ))}
                <div className="profile"><img src="/assets/persons/1.jpeg" alt="" /></div>
            </div>
        )
    }
    return (
        <div className={`Topbar_Component`}>
            <Logo_Search/>
            <Main_Links/>
            <Left_Icons/>
        </div>
    )
}


    export default Topbar