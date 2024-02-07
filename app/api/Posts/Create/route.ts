import { Create_Post, PostShap } from '@/Redux/Modules/Post/PostTypes';
import { NextRequest, NextResponse } from 'next/server';
let new_post = { 
        "main_post" :{
            "id"    : 2021  ,
            "Date" : {"number" : 1 , "unite" : "Hour" } ,
            "Reactions":{"Details" : [] , "numbers" : {"order" : {"first" : null , "Third" : null , "secound" : null} , "total" : 0}},
            "User" : {"Username" : "mohamed" , "id" : 10 , "img" : "mohamed.jpg"},
            "info" : {"text" : "This is New Post here i hope to see it okay"},
            "kind" : "Content" ,
            "type" : "New"
        } ,
        "user_interaction" : {"React" : null}
    }
export  async function POST(req: NextRequest){
    const data = await req.json() 
        new_post['main_post']['User']['id'] = data['Data']['User']['UserID']
        new_post['main_post']['info'] = data['Data']['info']
    return NextResponse.json(new_post)
}
