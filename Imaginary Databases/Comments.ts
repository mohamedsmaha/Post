import { CommentShap, Comment_Types, Comments_Filter, Create_Comment, Create_Comment_Api_Response, Delete_Comment, Delete_Comment_APi_Response, Select_Comments_Api_Response } from "@/Redux/Modules/Comments/CommentTypes";
import { User_DataBase_Model } from "./Users";
type DataBaseType = {[key in Comment_Types] : CommentShap[] }
class Comments_DateBase_Class{
    private data  : DataBaseType = {
        "Post" : [
                {
                        "Search_ID" : 1 ,
                        "Data" : {"number" : 1 , "unite" : "Minute"} ,
                        "User" : User_DataBase_Model.Get_User(4),
                        "id"   : 1,
                        "info" : {"Text" : "hey mohamed sabry nice to meet you"},
                        "user_Interaction" : false,
                        "Reacts" : {"Likes": 12 , "Replays" : 100}
                },
                {
                        "Search_ID" : 2 ,
                        "Data" : {"number" : 1 , "unite" : "Hour"} ,
                        "User" : User_DataBase_Model.Get_User(3),
                        "id"   : 2,
                        "info" : {"Text" : "what a wonderfull pic"},
                        "user_Interaction" : false,
                        "Reacts" : {"Likes": 120 , "Replays" : 100}
                }
        ]
    }
    private Get( Filter : {"type" : Comment_Types , "Search_Id" : number} ) : CommentShap[]{
        let Date : CommentShap[]= []
        this.data[Filter.type].map(item => {
            if(item.Search_ID == Filter.Search_Id){
                Date.push(item)
            }
        })
        return Date
    }
    public Select(Filter : Comments_Filter) : Select_Comments_Api_Response{
        let Date = this.Get(Filter)
        return {
            "Search_Id" : Filter.Search_Id ,
            "type"      : Filter.type ,
            "Date"      : Date
        }
    }
    public Create(info : Create_Comment) : Create_Comment_Api_Response{
        let Date : CommentShap= {
            "Data"      : {"number" : 1 , "unite" : "Day"} ,
            "Reacts"    : {"Likes" : 0 , "Replays" : 0} ,
            "Search_ID" : info.Search_ID ,
            "User"      : User_DataBase_Model.Get_User(info.User.UserID),
            "id"        : this.data[info.type].length + 1 ,
            "info"      : info.info ,
            "user_Interaction" : false
        }
        this.data[info.type].push(Date)
        return {
            "type" : info.type ,
            "Data" : Date
        }
    }
    public Delete(info:Delete_Comment) : Delete_Comment_APi_Response{
        let newData :CommentShap[]= []
            const index = this.Get({"type" : info.type , "Search_Id" : info.Search_ID} ).findIndex(item => item.id == info.item_id);
        for(let i = 0 , n = this.data[info.type].length ; i < n ; i++){
            if(i== index){continue}
            newData.push(this.data[info.type][i])
        }
        this.data[info.type]   = newData; 
        return {id : info.item_id , type : info.type , Search_Id : info.Search_ID}
    }
        
}
export const Comments_DateBase_Model = new Comments_DateBase_Class