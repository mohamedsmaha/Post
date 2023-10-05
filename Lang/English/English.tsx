import { Languagh_model } from "../Types/Languagh_model";

export const English : Languagh_model={
    "Activity": "Activity",
    "Bookmarks": "Bookmarks",
    "Calendar": "Calendar",
    "Chats": "Chats",
    "Comment": "Comment",
    "Courses": "Courses",
    "Day": "Day",
    "Days": "Days",
    "Feelings": "Feelings",
    "Groups": "Groups",
    "Hour": "Hour",
    "Hours": "Hours",
    "Jobs": "Jobs",
    "Like": "Like",
    "More": "More",
    "Month": "Month",
    "Months": "Months",
    "Online Friends": "Online Friends",
    "Pages": "Pages",
    "Photo": "Photo",
    "Questions": "Questions",
    "Share": "Share",
    "Search": "Search",
    "Settings": "Settings",
    "Shop": "Shop",
    "Videos": "Videos",
    "Week": "Week",
    "Weeks": "Weeks",
    "Year": "Year",
    "Years": "Years",
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
    },
    Rightbarcomponent:{
        birthday(name , number){
            return <><b> {name} </b> and <b>{number} other friends</b> have a birthday today</>
        }
    }
}