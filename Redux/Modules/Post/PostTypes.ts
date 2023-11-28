import { TimeUnites } from "@/Ts/Time"
import { anyUser_Type } from "../User/UserTypes"

export type PostRedux = {
    loading : Boolean ,
    error   : Error | null | string ,
    data    : PostData[]
}
export type Post_Type    = "Share" | "New"
export type Post_kind    = "Content"
export type ReactsIcons  = "Like" | "Love" 
export type time_unite   = "Day" | "Year" | "Month" | "Week"
export type sum          = 's'|''
export type time         = {"number" : number , "unite" : TimeUnites }
export type Content_info = {
    text  : string ,
    img  ?: string | null,
    vidoe?: string | null
}
export type Top_Three_Reacts = {
    first   : ReactsIcons | null ,
    secound : ReactsIcons | null ,
    Third   : ReactsIcons | null
}
export type Reactions    ={
    numbers : {order : Top_Three_Reacts , total : number } ,
    Details : {user : anyUser_Type   , React : ReactsIcons}[]
}
export type Post_info = {
    id          : number,
    kind        : Post_kind,
    info        : Content_info  ,
    Reactions   : Reactions     ,
    User        : anyUser_Type ,
    Data        : time,
    type        : Post_Type
}
export type PostData = {    
    main_post        : Post_info  ,
    Share_post      ?: Post_info  , 
    user_interaction : {React : ReactsIcons | null}
}