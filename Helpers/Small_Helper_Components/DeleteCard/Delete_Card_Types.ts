import { Comment_Types, Delete_Comment } from "@/Redux/Modules/Comments/CommentTypes"
import { Delete_item } from "@/Ts/Action"

export type Delete_Options = Delete_Comment_Option | Normal_Delete_Option
type Delete_Options_Text   = "Post" 
type Normal_Delete_Option  = {Data : {} , text : Delete_Options_Text}
type Delete_Comment_Option = {text : "Comment" , Data : {"Comment_type" : Comment_Types , "Search_ID" : number} } 
type Data                  = Delete_item | Delete_Comment 
export type Props = {
    Close_Function : () => void     ,
    item_id        : number         ,
    Option         : Delete_Options 
}
export type Helper_Function = {
    DELETE      : () => void ,
    Choose_path : (Data : Data ) => void ,
    Prepare_Data: (Data : Delete_item) => Data
}
