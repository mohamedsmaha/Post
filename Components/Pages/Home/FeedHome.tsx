"use client"
import React from 'react'
import Post from '@/Components/Commen/Post/Post'

const arr= [
    {
    id:1 ,
    user:{id : 2 , Name:"Mohamed sabry" , img :"/assets/persons/6.jpeg" },
    time:{"number":1 , "unite" : "Day"},
    "info":{
        "text":"hey" ,
        "interaction":{"likes" : 12 , comments : 13},
        "content":{"img" : "/assets/Posts/1.jpeg"}
    }
},
    {
    id:2 ,
    user:{id : 2 , Name:"Mohamed sabry" , img :"/assets/persons/6.jpeg" },
    time:{"number":1 , "unite" : "Day"},
    "info":{
        "text":"hey" ,
        "interaction":{"likes" : 12 , comments : 13},
        "content":{"img" : "/assets/Posts/1.jpeg"}
    }
},
    {
    id:3 ,
    user:{id : 2 , Name:"Mohamed sabry" , img :"/assets/persons/6.jpeg" },
    time:{"number":1 , "unite" : "Day"},
    "info":{
        "text":"hey" ,
        "interaction":{"likes" : 12 , comments : 13},
        "content":{"img" : "/assets/Posts/1.jpeg"}
    }
}
]

function FeedPosts() {
    return (
        <div>
            
            {arr.map(item=>(
                <Post key={item.id} post={item}/>
            ))}
        </div>
    )
}

export default FeedPosts