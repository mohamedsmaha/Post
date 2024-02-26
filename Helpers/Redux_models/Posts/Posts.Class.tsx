import { useAppSelector } from "@/Redux/Hooks"
import {Create_Post_Action, Delete_Post_Action, Select_Post_Action, Update_Post_Action } from "@/Redux/Modules/Post/PostFetch";
import { Create_Post, Delete_Post, PostRedux, Post_Filter } from "@/Redux/Modules/Post/PostTypes";
import { Action_Keys } from "@/Ts/LodingAction";

class Posts {
    private Call_Fetch(fun1 : Function , fun2 : Function , Data : any ){
        fun1(fun2(Data))
    }
    private redux() {
        let redux = {
            default_data : useAppSelector((state) => state.Posts)
        }
        return redux
    }
    public Get_Data () : PostRedux {
        return  this.redux().default_data
    }
    public Action_ON_Post( Dispatch : Function ,  Data : Create_Post | Post_Filter | Delete_Post , Action : Action_Keys){
        switch(Action){
            case "Insert" :     
                return this.Call_Fetch( Dispatch , Create_Post_Action , Data)
            case "Delete" : 
                return this.Call_Fetch(Dispatch , Delete_Post_Action , Data)
            case "Update" : 
                return this.Call_Fetch( Dispatch , Update_Post_Action , Data)
            case "Select" : 
                return this.Call_Fetch(Dispatch  , Select_Post_Action , Data)
        }
    }
    
}
export  const Posts_Model = new Posts