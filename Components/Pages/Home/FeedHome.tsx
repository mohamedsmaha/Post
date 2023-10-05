"use client"
import React from 'react'
import Post from '@/Components/Commen/Post/Post'
import "@/Scss/Pages/Home/FeedPost/FeedPost.css"
import { PostData } from '@/Redux/Modules/Post/PostTypes'
const arr : PostData[]= [
    { 
        "main_post" :{
            "id"    : 3,
            "Data" : {"number" : 10 , "unite" : "Days"} ,
            "Reactions":{"Details" : [] , "numbers" : {"order" : {"first" : "Like" , "Third" : null , "secound" : null} , "total" : 1200}},
            "User" : {"Username" : "mohamed" , "id" : 1 , "img" : "2.jpeg"},
            "info" : {"text" : "hey my name is mohamed"},
            "kind" : "Content" ,
            "type" : "New"
        } 
    },
    {
        "main_post" :{
            "id"   : 2,
            "Data" : {"number" : 10 , "unite" : "Days"} ,
            "Reactions":{"Details" : [] , "numbers" : {"order" : {"first" : "Like" , "Third" : null , "secound" : null} , "total" : 1200}},
            "User" : {"Username" : "mohamed" , "id" : 1 , "img" : "1.jpeg"},
            "info" : {"text" : "i love this man"},
            "kind" : "Content" ,
            "type" : "Share"
        } ,
        "Share_post" :{
            id : 1,
            "Data" : {"number" : 10 , "unite" : "Days"} ,
            "Reactions":{"Details" : [] , "numbers" : {"order" : {"first" : "Like" , "Third" : null , "secound" : null} , "total" : 1200}},
            "User"     : {"Username" : "Ali Ahemd" , "id" : 1 , "img" : "6.jpeg"},
            "info"     : {"text" : "What a wonderfull world" , "img" : "1.jpeg"},
            "kind"     : "Content" ,
            "type"     : "New"
        } 
    },
    {
        "main_post" :{
            "id"   : 1,
            "Data" : {"number" : 10 , "unite" : "Days"} ,
            "Reactions":{"Details" : [] , "numbers" : {"order" : {"first" : "Like" , "Third" : null , "secound" : null} , "total" : 1200}},
            "User"     : {"Username" : "Ali Ahemd" , "id" : 1 , "img" : "6.jpeg"},
            "info"     : {"text" : "What a wonderfull world" , "img" : "1.jpeg"},
            "kind"     : "Content",
            "type"     : "New" 
        } 
    },
]

function FeedPosts() {
    return (
        <div className='FeedPosts'>
            
            {arr.map(item=>(
                <Post key={item.main_post.id} post={item}/>
            ))}
        </div>
    )
}

export default FeedPosts