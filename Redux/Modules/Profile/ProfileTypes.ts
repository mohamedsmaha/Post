import { PostData } from "../Post/PostTypes"
import { User_Type, anyUser_Type } from "../User/UserTypes"

export type ProfileRedux = {
    loading : boolean ,
    error   : Error | string | null
    data    : profile_data 
}
export type info_keys = "Status" | "From" | "Born" | "Phone"
export type info = {
    "Status"    ?: "Married" | "Single" ,
    "From"      ?: string ,
    "Born"      ?: string ,
    "Phone"     ?: string
}
export type profile_data = {
    "Friends" ?: anyUser_Type [] ,
    "Posts"   ?: PostData[] ,
    "user"    ?: User_Type 
}