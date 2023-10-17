import { PostData, Post_Type, Post_info,  ReactsIcons } from "@/Redux/Modules/Post/PostTypes"
import {JSX } from "@emotion/react/jsx-runtime";
export type PropsType = {
    Post : PostData
} 
export type UserInfo         = {Post_data : Post_info}
export type Content          = {Post_data : Post_info}
export type Helper_Functions = {
    Reactions_images:(item : ReactsIcons | null) => JSX.Element | undefined,
    SelectShap:(type : Post_Type)=> React.ReactNode,
    TopReactions:() => JSX.Element
}