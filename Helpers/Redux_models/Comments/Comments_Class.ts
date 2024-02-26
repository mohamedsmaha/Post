import { useAppSelector } from "@/Redux/Hooks";
import { Create_Comment_Action, Select_Comments_Action } from "@/Redux/Modules/Comments/CommentFetch";
import { Comment_Types, Comments_Filter, Create_Comment } from "@/Redux/Modules/Comments/CommentTypes";
import { Action_Keys } from "@/Ts/LodingAction";

class Comments{
    private Call_Fetch(fun1 : Function , fun2 : Function , Data : any ){
        fun1(fun2(Data))
    }
    public GetActions( fun : Function,Action : Action_Keys , Date : Comments_Filter | Create_Comment){
        switch(Action){
            case "Insert" :
                return this.Call_Fetch(fun , Create_Comment_Action , Date )
            case "Select" :
                return this.Call_Fetch(fun , Select_Comments_Action , Date)
            case "Update" : 
            case "Delete" : 
        }
    }
}
export const Comments_Model = new Comments