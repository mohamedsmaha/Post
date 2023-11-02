import { PostData } from "../Post/PostTypes"
import { User_Type, anyUser_Type } from "../User/UserTypes"

export type ProfileRedux = {
    loading : boolean ,
    error   : Error | string | null
    data    : profile_data 
}
export type info = {
    "Status"    : "Married" | "Single" ,
    "from"      : string ,
    "born"      : string ,
}
export type profile_data = {
    "info"    ?: info       ,
    "Friends" ?: anyUser_Type [] ,
    "Posts"   ?: PostData[] ,
    "user"    ?: User_Type 
}