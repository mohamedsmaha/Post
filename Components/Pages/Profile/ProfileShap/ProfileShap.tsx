import React from 'react'
import { Helper_Functions, Props, Static_data } from './ProfileShapTypes'
import { Profile_Model } from '@/Helpers/Redux_models/Profile/Profile_Class'
import { APP_Folders } from '@/Static_Data/APP_Folders'
import "@/Scss/Pages/Profile/ProfileShap/ProfileShap.css"
import { Cake, Favorite, Home, MoreHoriz, PersonAdd, Phone } from '@mui/icons-material'
import Share from '@/Components/Commen/Share/Share'
import FeedPosts from '../../Home/FeedHome'
import { info_keys } from '@/Redux/Modules/Profile/ProfileTypes'
function ProfileShap(props : Props) {
    const arr = [
        { id: 5, Name: 'Emily Brown', img: '6.jpeg' },
        { id: 9, Name: 'Isaac Moore', img: '10.jpeg' },
        { id: 3, Name: 'Charlie Williams', img: '4.jpeg' },
        { id: 6, Name: 'Fiona Davis'  , img: '7.jpeg' },
        { id: 7, Name: 'George Miller', img: '8.jpeg' },
        { id: 8, Name: 'Hannah Wilson', img: '9.jpeg' },
        { id: 4, Name: 'David Jones', img: '5.jpeg' },
        { id: 1, Name: 'Alice Smith', img: '2.jpeg' },
        { id: 2, Name: 'Bob Johnson', img: '3.jpeg' }
    ]
    const Static_Data : Static_data = {
        middel : [
            {id : 1 , text : "main"   } ,
            {id:  2 , text : "friends"}
        ],
        info_box :{
            "Status" : {text : "Status" , icon : <Favorite/> } ,
            "From"   : {text : "From"   , icon : <Home/> } ,
            "Born"   : {text : "Born"   , icon : <Cake/> },
            "Phone"  :{text : "Phone" , icon : <Phone/>}
        }
    }
    const Helper_functions : Helper_Functions = {
        Handel_Box_info(info){
            let divs: JSX.Element[] = [];
            for (const item in  info) {
                divs.push(
                <div className='info_item' key={item}>
                    <p className='title'>
                        {Static_Data.info_box[item as info_keys].icon}
                        {Static_Data.info_box[item as info_keys].text}
                    </p>
                    <p className='sparate'>:</p>
                    <p className='info'>{info[item as info_keys]}</p>

                </div>);
            }
            return <>{divs}</>;
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
                            <button><PersonAdd/> Add Friend</button>
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
                    <button className={`${item.id == 1 ? "active" : ""}`} key={item.id}>{item.text}</button>
                ))}
            </div>            
        )
    }
    function Bottom(){
        return (
            <div className="bottom">
                <Main/>
            </div>
        )
    }
    // buttoms options
        function Main(){
            function InfoBox(){
                let info_box = Profile_Model.Getinfo()
                if(!info_box){return <></>}
                return (
                    <div className='infobox_Content'>
                        {Helper_functions.Handel_Box_info(info_box)}
                    </div>
                )
            }
            return (
                <div className='Main'>
                    <div className="left">
                        <div className="info_box">
                            <div className="header">
                                Info
                            </div>
                            <div className="box">
                                <InfoBox/>
                            </div>
                        </div>
                        <div className="friends">
                            <div className="header">
                                <div className="levelone">
                                    <p>Friends</p>
                                    <button>See all Friends</button>
                                </div>
                                <div className="leveltwo">
                                    423 friends
                                </div>
                            </div>
                            <div className="content">
                                {arr.map(item => (
                                    <div className='friend' key = {item.id}>
                                        <img src= {`${APP_Folders.Users()}/${item.img}`}alt="" />
                                        <p className="name">{item.Name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="share"><Share/></div>
                        <div className="posts"><FeedPosts/></div>
                    </div>
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