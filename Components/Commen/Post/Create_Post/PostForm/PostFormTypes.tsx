import { Create_Post, Option_For_Voting, PostShap, Post_Type } from "@/Redux/Modules/Post/PostTypes"
import React from "react"

export type Helper_Functions = {
    adjustTextareaHeight    : (element : HTMLTextAreaElement) => void , 
    Handel_Hide_Click       : (element : React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
    Select_Kind             : () => React.ReactNode , 

}
export type Content_HelperFunction ={
        Show_Contentinfo_image  : (element : HTMLInputElement ) => void ,
        Show_Contentinfo_Videos : (element : HTMLInputElement)  => void ,
        GetReady                : () => void ,
        New_Share               : () => void ,
        Update                  : () => void ,
        Choose_Media_Inputs     : () => React.ReactNode
}
export type Voting_HelperFunction ={
    Add_Option    : () => void ,
    Change_Option : (number : number , option : {text : string}) => void ,
    Delete_Option : (id     : number)=> void  ,
    New_Share     : () => void , 
    Update        : () => void ,
    GetReady      : () => void ,
    Is_Method_Equal_Update : () => void
}
export type Props_type = {
    Close      :  () => void , 
    Method     : Post_Type,
    Source_Post ?: { Data : PostShap , Image : React.ReactNode} // need it only in Share and update not create
}
export type TextArea_Props = {
    State       : {"Fn" : Function | null , "Value" : string | undefined}
    PlaceHolder : string ,
    Onclick     ?: (element : HTMLTextAreaElement) => void ,
    OnBlur      ?: () => void  
}
