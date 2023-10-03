import { Languagh_model } from "../Types/Languagh_model";

export const English : Languagh_model={
    "Activity"         : "Activity",
    "Bookmarks"        : "Bookmarks",
    "Calendar"         : "Calendar",
    "Chats"            : "Chats",
    "Comment"          : "Comment",
    "Courses"          : "Courses",
    "Day"              : "Day",
    "Feelings"         : "Feelings",
    "Groups"           : "Groups",
    "Jobs"             : "Jobs",
    "Like"             : "Like",
    "More"             : "More",
    "Online Friends"  : "Online Friends",
    "Pages"            : "Pages",
    "Photo"            : "Photo",
    "Questions"        : "Questions",
    "Search"           : "Search",
    "Settings"         : "Settings",
    "Shop"             : "Shop",
    "Share"            : "Share",
    "Videos"           : "Videos",
    Sharecomponent :{
        InputFiled(name : string){
            return `What is your mind , ${name} ? `
        }
    },
    Postcomponent : {
        Likes(likes : number){
            return `${likes} People liked it `
        },
        comments(comment : number){
            return `${comment} comment`
        },
        Time(number , unite){
            return `${number} ${English[unite]} ago`
        }
    }
}