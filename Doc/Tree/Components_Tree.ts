import { Components_Name } from "./Components";

let Components_Tree : {[key in Components_Name] :  Components_Name[]|null }= {
    "Main_Search_Box" : null ,
    "Notification"    : null ,
    "Post"            : ["CommentsBox" , "PostForm"] ,
    "CreatePost"      : ["PostForm"],
    "PostForm"        : null ,
    "Rightbar"        : null ,
    "Sidebar"         : null ,
    "Topbar"          : ["Main_Search_Box" , "Notification"],
    "FeedPosts"        : ["Post"],
    "ProfileShap"     : ["CreatePost" , "FeedPosts"],
    "Login"           : null ,
    "Register"        : ["SuccessProcess" , "ConfiremData"],
    "ForgetPassword"  : ["SuccessProcess" , "ConfiremData"],
    "ConfiremData"    : null ,
    "SuccessProcess"  : null ,
    "CommentsBox"     : null
}
