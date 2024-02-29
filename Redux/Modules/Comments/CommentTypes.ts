import { Delete_item, Loading_Action } from "@/Ts/Action"
import { UserAction, anyUser_Type } from "../User/UserTypes"
import { time } from "@/Ts/Time"

export type CommentRedux = {
    loading        : Loading_Action ,
    error          : Error | null | string ,
    data           : CommentShap[]
}
export type Comment_Types  = "Post"
export type Comment_info   = {Text ?: string , Img ?: string , Video ?: string}
type Reacts = {Likes : number , Replays : number}
export type CommentShap = {
    id   : number
    User : anyUser_Type
    info : Comment_info  ,
    Data : time          
    user_Interaction : Boolean,
    Reacts : Reacts ,
    Search_ID : number
}
// Helpers
export type Comments_Filter = {
    User     : UserAction
    type     : Comment_Types ,
    Search_Id: number 
}
export type Select_Comments_Api_Response = {
    "type"      : Comment_Types ,
    "Search_Id" : number        ,
    Date        : CommentShap[] 
}
export type Create_Comment = {
    User : UserAction ,
    info : Comment_info ,
    Date : Date ,
    Search_ID : number,
    type : Comment_Types
}
export type Create_Comment_Api_Response ={
    type : Comment_Types ,
    Data : CommentShap
}
export type Delete_Comment_APi_Response = {
    type      : Comment_Types ,
    id        : number ,
    Search_Id : number
}
export type Delete_Comment = {type : Comment_Types , Search_ID : number   } & Delete_item