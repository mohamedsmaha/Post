import { Components_Name } from "./Components";
import { Pages_Name } from "./page";

let Page_Tree : {[key in Pages_Name] : Components_Name[]}= {
    "Home"         : ["Topbar" , "Sidebar" , "Rightbar" , "CreatePost" , "FeedPosts"],
    "Profile"      : ["Topbar" , "ProfileShap"],
    "Assuntocation": ["Login"  , "ForgetPassword" , "Register"]
}