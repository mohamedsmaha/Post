import { Friend_Request, Notification_Type, Notification_element } from "@/Redux/Modules/Notification/NotificationTypes"

export type Helper_Fucntions = {
    Notification_type : (type : Notification_Type , element : Notification_element) => JSX.Element
}
export type Friend_Request_Props ={
    data : Friend_Request
} 