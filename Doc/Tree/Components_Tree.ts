import { Components_Name } from "./Components";
import { Small_Components_Name } from "./Small_Components";

let Components_Tree : {[key in Components_Name] :  (Components_Name | Small_Components_Name)[]|null }= {
    "Main_Search_Box" : null ,
    "Notification"    : null ,
    "Post"            : ["PostCommentsBox" , "PostForm" , "Delete_Card" , "Setting_Box"] ,
    "CreatePost"      : ["PostForm"],
    "PostForm"        : null ,
    "Rightbar"        : null ,
    "Sidebar"         : null ,
    "Topbar"          : ["Main_Search_Box" , "Notification"],
    "FeedPosts"       : ["Post"],
    "ProfileShap"     : ["CreatePost" , "FeedPosts"],
    "Login"           : null ,
    "Register"        : ["SuccessProcess" , "ConfiremData"],
    "ForgetPassword"  : ["SuccessProcess" , "ConfiremData"],
    "ConfiremData"    : null ,
    "SuccessProcess"  : null ,
    "PostCommentsBox" : ["Comment"] , 
    "Comment"         : ["Setting_Box" , "Delete_Card"]
}
