import { Create_Post, PostData, Post_Type } from "@/Redux/Modules/Post/PostTypes"

export type PostFormMethod   = "SharePost" | "CreatePost" | "Updata"
export type Helper_Functions = {
    adjustTextareaHeight    : (element : HTMLTextAreaElement) => void , 
    Show_Contentinfo_image  : (element : HTMLInputElement ) => void ,
    Show_Contentinfo_Videos : (element : HTMLInputElement)  => void ,
    Handel_Hide_Click       : (element : React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
    Handel_Textarea_onchange: (element : HTMLTextAreaElement)=> void ,
    Handel_Post_Click       : () => void,
    Get_Data_Ready          : () => Create_Post,
    Type                    : () => Post_Type
}
export type Props_type = {
    Close     :  () => void , 
    Method    : PostFormMethod,
    SharePost ?: {Data : PostData , Image : React.ReactNode}
}