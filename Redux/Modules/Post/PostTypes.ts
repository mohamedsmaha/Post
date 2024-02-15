import { TimeUnites } from "@/Ts/Time"
import { UserAction, anyUser_Type } from "../User/UserTypes"
import { Loading_Action } from "@/Ts/LodingAction"

export type PostRedux = {
    loading        : Loading_Action ,
    error          : Error | null | string ,
    data           : PostShap[]
}
export type Post_Type    = "Share" | "New" | "Update"
export type Post_kind    = "Content"
export type ReactsIcons  = "Like" | "Love" 
export type time_unite   = "Day" | "Year" | "Month" | "Week"
export type sum          = 's'|''
export type time         = {"number" : number , "unite" : TimeUnites }
export type Post_Data    = Content_info
export type Content_info = {
    text ?: string ,
    img  ?: string ,
    vidoe?: string 
}
export type Top_Three_Reacts = {
    first   : ReactsIcons | null ,
    secound : ReactsIcons | null ,
    Third   : ReactsIcons | null
}
export type Public_Interactions   ={
    numbers  : {order : Top_Three_Reacts , total : number } ,
    Comments : number 
}
export type Post_info = {
    id          : number,
    kind        : Post_kind,
    info        : Post_Data  ,
    Public_Interactions   : Public_Interactions      ,
    User        : anyUser_Type ,
    Date        : time,
    type        : Post_Type
}
export type PostShap = {    
    main_post        : Post_info  ,
    Share_post      ?: Post_info  , 
    user_interaction : {React : ReactsIcons | null}
}
export type Loading_post = {
    Loading_image : string
    
}

// Helpers
// Create_post same as UpdatePost
export type Create_Post = {
    User : UserAction       ,
    kind : Post_kind        ,
    info : Content_info     ,
    Data : Date             ,
    type : Post_Type        ,
    SharePostId ?: number 
}
export type Update_Post = {
    User : UserAction       ,
    kind : Post_kind        ,
    info : Content_info     ,
    Data : Date             ,
    type : Post_Type        ,
    SharePostId ?: number   
}
export type Delete_Post = {
    User    : UserAction     ,
    Post_id : Number
}
export type Post_Filter = {
    User_Id ?: number
    Post_Id ?: number
}