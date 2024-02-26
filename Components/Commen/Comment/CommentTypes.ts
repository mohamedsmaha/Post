import { CommentShap, Comment_Types } from "@/Redux/Modules/Comments/CommentTypes"
import { anyUser_Type } from "@/Redux/Modules/User/UserTypes"

export type Comment_props = {
    Date   : CommentShap , 
    Post_Date : {
        User : anyUser_Type ,
        id   : number
    },
    option : Comment_Types

}