"use client"
import React from 'react'
import { Chat, Group, Bookmark , WorkTwoTone, HelpOutline, CalendarMonth, School, Store, Settings, Flag} from "@mui/icons-material";
import { Static_data } from './Sidebartype';
import "@/scss/Commen/Sidebar/Sidebar.css"
import Link from 'next/link';
import { Translate } from '@/Helpers/Translate';
const Friends =[
    {id: 1, Name: 'Alice Smith'     , img: './assets/persons/2.jpeg'},
    {id: 2, Name: 'Bob Johnson'     , img: './assets/persons/3.jpeg'},
    {id: 6, Name: 'Fiona Davis'     , img: './assets/persons/7.jpeg'},
    {id: 7, Name: 'George Miller'   , img: './assets/persons/8.jpeg'},
    {id: 8, Name: 'Hannah Wilson'   , img: './assets/persons/9.jpeg'},
    {id: 9, Name: 'Isaac Moore'     , img: './assets/persons/10.jpeg'}
]
function Sidebar() {
// Static_data
    const Static_data : Static_data = {
        Buttons : [
            { id: 1   , word: Translate("Shop")     , icon: <Store />         , link: "/" },
            { id: 2   , word: Translate("Chats")    , icon: <Chat />          , link: "/" },
            { id: 3   , word: Translate("Groups")   , icon: <Group />         , link: '/' },
            { id: 4   , word: Translate("Pages")    , icon: <Flag />          , link: '/' },
            { id: 5   , word: Translate("Bookmarks"), icon: <Bookmark />      , link: '/' },
            { id: 6   , word: Translate("Questions"), icon: <HelpOutline />   , link: "/" },
            { id: 7   , word: Translate("Jobs")     , icon: <WorkTwoTone />   , link: "/" },
            { id: 8   , word: Translate("Calendar") , icon: <CalendarMonth /> , link: "/" },
            { id: 9   , word: Translate("Courses")  , icon: <School />        , link: "/" },
            { id: 10  , word: Translate("Settings") , icon: <Settings />      , link: "/" }
        ]
    }
// Small Components
    function SidebarIcons() {
        return (
            <ul className="LinksList">
                {Static_data.Buttons.map(item => (
                    <li className="item" key={item.id}>
                    <Link href={item.link !== undefined ? item.link : "#"}>
                        {item.icon}
                        <span className="label">
                        {item.word}
                        </span>
                    </Link>
                    </li>
                ))}
            </ul>
        );
    }
    function FriendList() {
        return (
            <ul className="FriendsList">
                {Friends.map(friend => (
                    <li className="item" key={friend.id}>
                        <img src={friend.img} alt=""/>
                        <span className="name">{friend.Name}</span>
                    </li>
                ))}
                <button>{Translate("More")}</button>
            </ul>
        );
    }
    return (
        <div className={`Sidebar_Component `}>
            <SidebarIcons/>
            <button>{Translate("More")}</button>
            <hr className="line"/>
            <FriendList/>
        </div>
    )
}

export default Sidebar