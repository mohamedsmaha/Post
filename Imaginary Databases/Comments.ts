import { CommentShap, Comment_Types, Comments_Filter, Create_Comment, Create_Comment_Api_Response, Select_Comments_Api_Response } from "@/Redux/Modules/Comments/CommentTypes";
import { Search } from "@mui/icons-material";

class Comments_DateBase_Class{
    date : {[key in Comment_Types] : CommentShap[] } = {
        "Post" : [
                {
                        "Search_ID" : 1 ,
                        "Data" : {"number" : 1 , "unite" : "Minute"} ,
                        "User" : {"id" : 4 , "Username" : "mohamed sabry" , "img" :"1.jpeg" },
                        "id"   : 1,
                        "info" : {"Text" : "hey mohamed sabry nice to meet you"},
                        "user_Interaction" : false,
                        "Reacts" : {"Likes": 12 , "Replays" : 100}
                },
                {
                        "Search_ID" : 2 ,
                        "Data" : {"number" : 1 , "unite" : "Hour"} ,
                        "User" : {"id" : 4 , "Username" : "mohamed sabry" , "img" :"2.jpeg" },
                        "id"   : 2,
                        "info" : {"Text" : "what a wonderfull pic"},
                        "user_Interaction" : false,
                        "Reacts" : {"Likes": 120 , "Replays" : 100}
                }
        ]
    }
    private Get( Filter : Comments_Filter) : CommentShap[]{
        let Date : CommentShap[]= []
        this.date[Filter.type].map(item => {
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
            "User"      : {"id" :  1 , "Username" : "moahmed sabry" , "img" : '1.jpeg'},
            "id"        : this.date[info.type].length + 1 ,
            "info"      : info.info ,
            "user_Interaction" : false
        }
        this.date[info.type].push(Date)
        return {
            "type" : info.type ,
            "Data" : Date
        }
    }
}
export const Comments_DateBase_Model = new Comments_DateBase_Class