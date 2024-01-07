"use client"
import React, { useEffect } from 'react'
import Post from '@/Components/Commen/Post/Post'
import "@/Scss/Commen/FeedPosts/FeedPosts.css"
import { PostData } from '@/Redux/Modules/Post/PostTypes'
import { Posts_Model } from '@/Helpers/Redux_models/Posts/Posts.Class'
import { Fetch_Posts } from '@/Redux/Modules/Post/PostFetch'
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks'
// const arr : PostData[]= [
//     { 
//         "main_post" :{
//             "id"    : 1,
//             "Data" : {"number" : 10 , "unite" : "Days"} ,
//             "Reactions":{"Details" : [] , "numbers" : {"order" : {"first" : "Like" , "Third" : null , "secound" : null} , "total" : 1200}},
//             "User" : {"Username" : "mohamed" , "id" : 4 , "img" : "2.jpeg"},
//             "info" : {"text" : "hey my name is mohamed"},
//             "kind" : "Content" ,
//             "type" : "New"
//         } ,
//         "user_interaction" : {"React" : "Like"}
//     },
//     {
//         "main_post" :{
//             "id"   : 2,
//             "Data" : {"number" : 10 , "unite" : "Days"} ,
//             "Reactions":{"Details" : [] , "numbers" : {"order" : {"first" : "Like" , "Third" : null , "secound" : "Love"} , "total" : 1200}},
//             "User" : {"Username" : "mohamed" , "id" : 4 , "img" : "1.jpeg"},
//             "info" : {"text" : "i love this man"},
//             "kind" : "Content" ,
//             "type" : "Share"
//         } ,
//         "Share_post" :{
//             id : 1,
//             "Data" : {"number" : 3 , "unite" : "Weeks"} ,
//             "Reactions":{"Details" : [] , "numbers" : {"order" : {"first" : "Like" , "Third" : null , "secound" : null} , "total" : 1200}},
//             "User"     : {"Username" : "Ali Ahemd" , "id" : 3 , "img" : "6.jpeg"},
//             "info"     : {"text" : "What a wonderfull world" , "img" : "1.jpeg"},
//             "kind"     : "Content" ,
//             "type"     : "New"
//         } ,
//         "user_interaction" : {"React" : null}
//     },
//     {
//         "main_post" :{
//             "id"   : 1,
//             "Data" : {"number" : 3 , "unite" : "Weeks"} ,
//             "Reactions":{"Details" : [] , "numbers" : {"order" : {"first" : "Like" , "Third" : null , "secound" : null} , "total" : 1200}},
//             "User"     : {"Username" : "Ali Ahemd" , "id" : 1 , "img" : "6.jpeg"},
//             "info"     : {"text" : "What a wonderfull world" , "img" : "1.jpeg"},
//             "kind"     : "Content",
//             "type"     : "New" 
//         } ,
//         "user_interaction" : {"React" : "Love"}
//     },
// ]
const emptypost : PostData=     {
        "main_post" :{
            "id"   : -1 ,
            "Data" : {"number" : 0 , "unite" : "Weeks"} ,
            "Reactions": {"Details" : [] , "numbers" : {"order" : {"first" : null , "Third" : null , "secound" : null} , "total" :0}},
            "User"     : {"Username" : "NUll" , "id" : 1 , "img" : "Null"},
            "info"     : {"text" : 'Loading'},
            "kind"     : "Content",
            "type"     : "New" 
        } ,
        "user_interaction" : {"React" : null}
    }
function FeedPosts() {

    const { loading, error, data } = Posts_Model.Get_Data();
    Posts_Model.call_data()
    return (
        <div className='FeedPosts'>
            {                data.map((item) => (
                <Post key={item.main_post.id} Post={item} Kind="Normal" />
                ))}
        {loading ? <Post key={"loading"} Post={emptypost} Kind="Loading" /> : null}
        {!loading && (
            <>
            {error !== null ? (
                <Post key={emptypost.main_post.id} Post={emptypost} Kind="Null" />
            ) : data.length === 0 ? (
                <Post key={emptypost.main_post.id} Post={emptypost} Kind="Null" />
            ) :null}
            </>
        )}
        </div>
    );
}


export default FeedPosts