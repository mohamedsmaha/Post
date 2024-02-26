import { CommentRedux, Comments_Filter, Create_Comment } from "@/Redux/Modules/Comments/CommentTypes"
import { anyUser_Type } from "@/Redux/Modules/User/UserTypes"

export type PostCommentsBox_Vaisablity = "Show" | "Hide" | null
export type Props_Type = {
    Vaisablity :  PostCommentsBox_Vaisablity
    Post_Date : {
        User : anyUser_Type ,
        id   : number
    }
    Comments  : CommentRedux 
}
export type Helper_Function = {
    Comments_Filter : () => Comments_Filter ,
    Create_Comment  : () => void
}