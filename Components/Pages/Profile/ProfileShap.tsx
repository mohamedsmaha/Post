import React, { Fragment, useState } from 'react'
import { Bottom_Components_type, Helper_Functions, Props, Static_data } from './ProfileShapTypes'
import { Profile_Model } from '@/Helpers/Redux_models/Profile/Profile_Class'
import { APP_Folders } from '@/Static_Data/APP_Folders'
import "@/Scss/Pages/Profile/ProfileShap/ProfileShap.css"
import { Cake, Favorite, Home, MoreHoriz, PersonAdd, PersonRemove, Phone } from '@mui/icons-material'
import { Box_info_keys, anyUser_Type } from '@/Redux/Modules/User/UserTypes'
import { Translate } from '@/Helpers/Translate'
import CreatePost from '@/Components/Commen/Post/Create_Post/Create_Post'
import FeedPosts from '@/Components/Commen/Feed_Posts/FeedPosts'
const arr = [
    { id: 5, Username: 'Emily Brown', img: '6.jpeg' },
    { id: 9, Username: 'Isaac Moore', img: '10.jpeg' },
    { id: 3, Username: 'Charlie Williams', img: '4.jpeg' },
    { id: 6, Username: 'Fiona Davis'  , img: '7.jpeg' },
    { id: 7, Username: 'George Miller', img: '8.jpeg' },
    { id: 8, Username: 'Hannah Wilson', img: '9.jpeg' },
    { id: 4, Username: 'David Jones', img: '5.jpeg' },
    { id: 1, Username: 'Alice Smith', img: '2.jpeg' },
    { id: 2, Username: 'Bob Johnson', img: '3.jpeg' }
]
function ProfileShap(props : Props) {

// Hooks
    const [Bottom_component , set_Bottom_component] = useState<Bottom_Components_type>("Main")
// constants
    const Static_Data : Static_data = {
        middel : [
            {id : 1 , text : "Main"   } ,
            {id:  2 , text : "Friends"}
        ],
        info_box :{
            "Status" : {text : "Status" , icon : <Favorite/> } ,
            "From"   : {text : "From"   , icon : <Home/> } ,
            "Born"   : {text : "Born"   , icon : <Cake/> },
            "Phone"  : {text : "Phone"  , icon : <Phone/>}
        }
    }
    const Helper_functions : Helper_Functions = {
        Handel_Box_info(info){
            let divs: JSX.Element[] = [];
            for (const item in  info) {
                divs.push(
                <div className='info_item' key={item}>
                    <p className='title'>
                        {Static_Data.info_box[item as Box_info_keys].icon}
                        {Static_Data.info_box[item as Box_info_keys].text}
                    </p>
                    <p className='sparate'>:</p>
                    <p className='info'>{info[item as Box_info_keys]}</p>

                </div>);
            }
            return <>{divs}</>;
        },
        Handel_Bottom_component(Component_Name ){
            set_Bottom_component(Component_Name)
        },
        Handel_Choose_Button_Component(Component_Name)
        {
            switch(Component_Name){
                case "Main" : 
                    return <Main/>
                case "Friends" :
                    return <Friends/>
            }
        }

    }
// small components
    function TopPart(){
        return (
            <div className="Top">
                <img className='SecoundImg' src={`${APP_Folders.Profile_Background()}/${Profile_Model.GetUser().GetSecoundImg()}`} alt="" />
                <div className="smallinfo">
                    <img className='MainImg'    src={`${APP_Folders.Users()}/${Profile_Model.GetUser().GetMainImg()}`} alt="" />
                    <div className="Box">
                        <p className="username">
                            {Profile_Model.GetUser().GetName()}
                        </p>
                        <div className="actions">
                            <button><PersonAdd/>{Translate("Add Friend")}</button>
                            <MoreHoriz/>
                        </div>
                    </div>  
                </div>
            </div>
        )
    }
    function Middelpart()
    {
        return(
            <div className="middel">
                {Static_Data.middel.map(item => (
                    <button className={`${Bottom_component == item.text ? "active" : ""}`} 
                            onClick={() => Helper_functions.Handel_Bottom_component(item.text )}
                            key={item.id}>{Translate(item.text)}</button>
                ))}
            </div>            
        )
    }
    function Bottom(){
        return (
            <div className="bottom">
                {Helper_functions.Handel_Choose_Button_Component(Bottom_component)}
            </div>
        )
    }
    // bottoms options
        function Main(){
            function InfoBox(){
                let info_box = Profile_Model.Getinfo()
                if(!info_box){return <></>}
                return (
                    <div className="info_box">
                        <div className="header">
                            {Translate("Info")}
                        </div>
                        <div className="box">
                            <div className='infobox_Content'>
                                {Helper_functions.Handel_Box_info(info_box)}
                            </div>
                        </div>
                    </div>
                )
            }
            function FriendsBox(){
                return (
                    <div className="friends">
                    <div className="header">
                        <div className="levelone">
                            <p>Friends</p>
                            <button onClick={() => Helper_functions.Handel_Bottom_component("Friends")}>See all Friends</button>
                        </div>
                        <div className="leveltwo">
                            423 friends
                        </div>
                    </div>
                    <div className="content">
                        {arr.map(item => (
                            <div className='friend' key = {item.id}>
                                <img src= {`${APP_Folders.Users()}/${item.img}`}alt="" />
                                <p className="name">{item.Username}</p>
                            </div>
                        ))}
                    </div>
                    </div>
                )
            }
            return (
                <div className='Main'>
                    <div className="left">
                        <InfoBox/>
                        <FriendsBox/>
                    </div>
                    <div className="right">
                        <CreatePost Page="Profile" />
                        <FeedPosts Page="Profile"/>
                    </div>
                </div>
            )
        }
        function Friends(){
            function Friend(props : {User:anyUser_Type}){
                const {User} = props
                return (<div className="Friend">
                    <img src={`${APP_Folders.Users()}/${User.img}`} alt="" />
                    <div className="text">
                        <p>{User.Username}</p>
                        <div className="icons">
                            <PersonRemove/>
                        </div>
                    </div>
                </div>)
            }
            return (
                <div className='Friends'>
                    {arr.map(item => (
                        <Fragment key = {item.id}>
                            <Friend User = {item}/>
                        </Fragment>
                    ))}
                </div>
            )
        }
    return (
        <div className="ProfileShap_Component">
            <TopPart/>  
            <Middelpart/>
            <Bottom/>
        </div>        
    )
}

export default ProfileShap