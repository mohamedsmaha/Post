import { PostData, Post_Type, Post_info,  ReactsIcons } from "@/Redux/Modules/Post/PostTypes"
import {JSX } from "@emotion/react/jsx-runtime";
import { MouseEvent } from "react";
export type PropsType = {
    Post : PostData
} 
export type Post_Setting = "Delete" | "Updata"
export type HTMLDivElementRef = React.RefObject<HTMLDivElement>;
export type UserInfo         = {Post_data : Post_info}
export type Content          = {Post_data : Post_info}
export type Helper_Functions = {
    Reactions_images:(item : ReactsIcons | null , Onclick?:() => void) => JSX.Element | undefined,
    SelectShap:(type : Post_Type)=> React.ReactNode,
    TopReactions:() => JSX.Element,
    Handel_React_onclick:(react : ReactsIcons)=>void,
    Post_Mouse_Move:(event :MouseEvent) => void,
    Handel_CommentBox_ClassName:()=>void,
    PostFormImage : () => React.ReactNode
}