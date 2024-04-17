import { PostShap, Post_Type, Post_info, Post_kind } from "@/Redux/Modules/Post/PostTypes"
import { ReactsIcons } from "@/Ts/ReactsIcons";
import {JSX } from "@emotion/react/jsx-runtime";
import React, { BaseSyntheticEvent, MouseEvent } from "react";
export type PropsType = {
    Post    : PostShap ,
    Options : Options
} 
export type Options          = "Loading"| 'Normal' | "Null"
export type Post_Setting     = "Delete" | "Updata"

export type UserInfo         = {Post_data : Post_info , Static? : Boolean}
export type Main_Kind_Data   = {Post_data : Post_info , Updata? : Boolean}

// Actions


export type For_Voting = {
  kind: "Vote";
        Data: {
            input:  HTMLInputElement;
        };
};

type Actions     = For_Voting
export type Helper_Functions = {
    Reactions_images:(item : ReactsIcons | null , Onclick?:() => void) => JSX.Element | undefined,
    SelectShap:(type : Post_Type)=> React.ReactNode,
    TopReactions:() => JSX.Element,
    Handel_React_onclick:(react : ReactsIcons)=>void,
    Post_Mouse_Move:(event :MouseEvent) => void,
    Handel_CommentBox_ClassName:()=>void,
    PostFormImage : () => React.ReactNode,
    Select_Option : (Option : Options) => React.ReactNode
    DeterMine_Post_Kind : (kind : Post_kind, Data : Main_Kind_Data) => React.ReactNode ,
    InterAction   : (Action : Actions) => void
}