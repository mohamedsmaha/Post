import { TimeUnites } from "@/Ts/Time"
import { anyUser_Type} from "../User/UserTypes"


export type NotificationRedux = {
    loading : Boolean ,
    error   : Error | null | string ,
    data    : Notifications
}
export type Notification_Type            = "Friend_Request"
export type Notification_element         = Friend_Request 
export type Friend_Request = {
        "id"   : number  ,
        "To"   : anyUser_Type ,
        "From" : anyUser_Type ,
        "Time" : {"duration" : number , "Unite" : TimeUnites},
        "Seen"     : boolean  ,
        "Accepted" : boolean  ,
        "Refused"  : boolean  , 
        "Type"     : "Friend_Request"
}
export type Notifications = (Notification_element)[];