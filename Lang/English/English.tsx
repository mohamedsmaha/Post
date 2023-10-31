import { Languagh_model } from "../Types/Languagh_model";

export const English : Languagh_model={
    "Activity": "Activity",
    "Accept"  : "Accept",
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
    "Love" :"Love",
    "More": "More",
    "Month": "Month",
    "Months": "Months",
    "New"   : "New",
    "Notifications" : "Notifications",
    "Online Friends": "Online Friends",
    "Password" : "Password",
    "Pages": "Pages",
    "Photo": "Photo",
    "Phone": "Phone",
    "Questions": "Questions",
    "Register" :"Register",
    "Resend"   : "Resend",
    "Refuse"   : "Refuse",
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
    ShareObject :{
        InputFiled:(name : string)=>{
            return `What is your mind , ${name} ? `
        }
    },
    PostObject : {
        Likes:(likes : number)=>{
            return `${likes} People liked it `
        },
        Comments:(comment : number)=>{
            return `${comment} comment`
        }
    },
    RightbarObject:{
        Birthday:(name , number)=>{
            return <><b> {name} </b> and <b>{number} other friends</b> have a birthday today</>
        }
    },
    AssuntocationObject:{
        "Sentence" : {
            "Your account has been successfully created" : "Your account has been successfully created" ,
            "Email verification code"                    : "Email verification code" ,
            "Confirm Your Email"                         : "Confirm Your Email",
            "Create New Password"                        : "Create New password",
            "New Password"                               : "New Password" ,
            "Confirm New Password"                       : "Confirm New Password",
            "Change Password"                            : "Change Password",
            "Password successfully changed"              : "Password successfully changed"
        }
    },
    StaticWordsObject : {
        sentence : {
            "App_name"  : "Post" ,
            "App_slogan": "What A Better Society Should Be Like"
        },
        Time:(number , unite)=>{
            return `${number} ${English[unite]} ago`
        }
    },
    NotificationObject:{
        AddSendToUser(username ){return <><b>{username}</b> has sent you a Friend Request</>},
        AddAcppeted(username){return<><b>{username}</b> has accepted your Friend Request</>},
        AddRefused(username){return <><b>{username}</b> has refused your Friend Request</>}
    }
}