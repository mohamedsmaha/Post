import { APP_Folders } from "@/Static_Data/APP_Folders"
import { NextResponse } from "next/server"

const Posts  =[
    { 
        "main_post" :{
            "id"    : 1,
            "Date" : {"number" : 10 , "unite" : "Days"} ,
            "Reactions":{"Details" : [] , "numbers" : {"order" : {"first" : "Like" , "Third" : null , "secound" : null} , "total" : 1200}},
            "User" : {"Username" : "mohamed" , "id" : 4 , "img" : "2.jpeg"},
            "info" : {"text" : "hey my name is mohamed"},
            "kind" : "Content" ,
            "type" : "New"
        } ,
        "user_interaction" : {"React" : "Like"}
    },
    {
        "main_post" :{
            "id"   : 2,
            "Date" : {"number" : 10 , "unite" : "Days"} ,
            "Reactions":{"Details" : [] , "numbers" : {"order" : {"first" : "Like" , "Third" : null , "secound" : "Love"} , "total" : 1200}},
            "User" : {"Username" : "mohamed" , "id" : 4 , "img" : `1.jpeg`},
            "info" : {"text" : "i love this man"},
            "kind" : "Content" ,
            "type" : "Share"
        } ,
        "Share_post" :{
            "id"   : 3,
            "Date" : {"number" : 3 , "unite" : "Weeks"} ,
            "Reactions":{"Details" : [] , "numbers" : {"order" : {"first" : "Like" , "Third" : null , "secound" : null} , "total" : 1200}},
            "User"     : {"Username" : "Ali Ahemd" , "id" : 1 , "img" : `6.jpeg`},
            "info"     : {"text" : "What a wonderfull world" , "img" : `${APP_Folders.Posts("images")}/1.jpeg`},
            "kind"     : "Content",
            "type"     : "New" 
        } ,
        "user_interaction" : {"React" : null}
    },
    {
        "main_post" :{
            "id"   : 3,
            "Date" : {"number" : 3 , "unite" : "Weeks"} ,
            "Reactions":{"Details" : [] , "numbers" : {"order" : {"first" : "Like" , "Third" : null , "secound" : null} , "total" : 1200}},
            "User"     : {"Username" : "Ali Ahemd" , "id" : 1 , "img" : `6.jpeg`},
            "info"     : {"text" : "What a wonderfull world" , "img" : `${APP_Folders.Posts("images")}/1.jpeg`},
            "kind"     : "Content",
            "type"     : "New" 
        } ,
        "user_interaction" : {"React" : "Love"}
    },
]

export  async function POST(){
    return NextResponse.json(Posts)
}