import { PostData } from "../Post/PostTypes"
import { User_Type, anyUser_Type } from "../User/UserTypes"

export type ProfileRedux = {
    loading : boolean ,
    error   : Error | string | null
    data    : profile_data 
}

export type profile_data = {
    "Friends" ?: {Friends : anyUser_Type [] , Number : number } ,
    "Posts"   ?: PostData[] ,
    "user"    ?: User_Type 
}