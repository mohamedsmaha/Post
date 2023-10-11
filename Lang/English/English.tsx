import { Languagh_model } from "../Types/Languagh_model";

export const English : Languagh_model={
    "Activity": "Activity",
    "Bookmarks": "Bookmarks",
    "BirthDay" : "BirthDay",
    "Calendar": "Calendar",
    "Chats": "Chats",
    "Comment": "Comment",
    "Courses": "Courses",
    "Create" : "Create" ,
    "Confirm": "Confirm",
    "Change" : "Change",
    "Day": "Day",
    "Days": "Days",
    "Email":"Email",
    "Feelings": "Feelings",
    "Forget_Password" : "Forget Password",
    "Groups": "Groups",
    "Hour": "Hour",
    "Hours": "Hours",
    "Jobs": "Jobs",
    "Like": "Like",
    "Login":"Login",
    "More": "More",
    "Month": "Month",
    "Months": "Months",
    "Online Friends": "Online Friends",
    "Password" : "Password",
    "Pages": "Pages",
    "Photo": "Photo",
    "Phone": "Phone",
    "Questions": "Questions",
    "Register" :"Register",
    "Resend"   : "Resend",
    "Share": "Share",
    "Search": "Search",
    "Settings": "Settings",
    "Shop": "Shop",
    "UserName" : "Username",
    "Videos": "Videos",
    "Week": "Week",
    "Weeks": "Weeks",
    "Year": "Year",
    "Years": "Years",
    Sharecomponent :{
        InputFiled:(name : string)=>{
            return `What is your mind , ${name} ? `
        }
    },
    Postcomponent : {
        Likes:(likes : number)=>{
            return `${likes} People liked it `
        },
        Comments:(comment : number)=>{
            return `${comment} comment`
        },
        Time:(number , unite)=>{
            return `${number} ${English[unite]} ago`
        }
    },
    Rightbarcomponent:{
        Birthday:(name , number)=>{
            return <><b> {name} </b> and <b>{number} other friends</b> have a birthday today</>
        }
    }
}