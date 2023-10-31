import { Notification_Model } from '@/Helpers/Redux_models/Notifications/Notifications_Class'
import React from 'react'
import { Friend_Request_Props, Helper_Fucntions } from './NotificationTypes'
import { User_Model } from '@/Helpers/Redux_models/Users/Users_Class'
import { APP_Folders } from '@/Static_Data/APP_Folders'
import { Translate, Translate_Object } from '@/Helpers/Translate'
import { NotificationElementsLangType } from '@/Lang/Types/Components/Notification'
import { StaticWordsElementsLangType } from '@/Lang/Types/Static_Words'
import "@/Scss/Commen/Notification/Notification.css"
function Notification() {
// Redux
    let Redux = {
        Notifications : Notification_Model.GetAll()
    }
// Lang
    const NotificationObj = Translate_Object("Notification") as NotificationElementsLangType
    const Static_WordsObj = Translate_Object("StaticWords")  as StaticWordsElementsLangType
// Helper Function
    let Helper_Functions : Helper_Fucntions = {
        Notification_type(type , element){
            switch(type ){
                case "Friend_Request" : 
                    return <Friend_Request data = {element}/>
            }
        }
    }
// small Components
    function Friend_Request(props : Friend_Request_Props){
        const Element = props.data
        function FromUser(){
            return <>
                <div className="left">
                    <img  src={`${APP_Folders.Users()}/${props.data.To.img}`} alt="" />
                </div>
                <div className="right">
                    <div className="text">
                        {
                            Element.Accepted ? 
                            NotificationObj.AddAcppeted(Element.To.Username) :
                            NotificationObj.AddRefused(Element.To.Username)
                        }
                    </div>
                    <div className="time">
                        {Static_WordsObj.Time(Element.Time.duration , Element.Time.Unite)}
                    </div>
                </div>
            </>
        }
        function Touser(){
            return <>
                <div className="left">
                    <img src={`${APP_Folders.Users()}/${props.data.From.img}`} alt="" />
                </div>
                <div className="right">
                    <div className="text">
                        {NotificationObj.AddSendToUser(Element.From.Username)}
                    </div>
                    <div className="buttons">
                        <button>{Translate("Accept")}</button>
                        <button>{Translate("Refuse")}</button>
                    </div>
                    <div className="time">
                        {Static_WordsObj.Time(Element.Time.duration , Element.Time.Unite)}
                    </div>
                </div>
            </>
        }
        return <>
                <div className="Box Friend_Request">
                    {Element.From.id == User_Model.GetId() ? <FromUser/> : <Touser/> }
                </div>
        </>
    }
    return (
        <div className="Notification_Component">
            <div className="Header">
                    {Translate("Notifications")}
            </div>
            <div className="Container">
                {Redux.Notifications.data.map(item =>(
                    <React.Fragment key = {item.id}>
                        {Helper_Functions.Notification_type(item.Type , item)}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default Notification