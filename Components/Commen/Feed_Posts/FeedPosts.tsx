"use client"
import React, { useEffect } from 'react'
import Post from '@/Components/Commen/Post/Post'
import "@/Scss/Commen/FeedPosts/FeedPosts.css"
import { PostShap, Post_Filter} from '@/Redux/Modules/Post/PostTypes'
import { Posts_Model } from '@/Helpers/Redux_models/Posts/Posts.Class'
import { useAppDispatch } from '@/Redux/Hooks'
import { Helper_Functions, PropsType } from './FeedPosts_Type'
import { Profile_Model } from '@/Helpers/Redux_models/Profile/Profile_Class'
import { User_Model } from '@/Helpers/Redux_models/Users/Users_Class'

const emptypost : PostShap=     {
        "main_post" :{
            "id"   : -1 ,
            "Date" : {"number" : 0 , "unite" : "Weeks"} ,
            "Public_Interactions" :{ "Comments" : 10 ,"numbers" : {"order" : {"first" : null , "Third" : null , "secound" : null} , "total" :0}},
            "User"     : {"Username" : "NUll" , "id" : 1 , "img" : "Null"},
            "info"     : {"text" : 'Loading'},
            "kind"     : "Content",
            "type"     : "New" 
        } ,
        "user_interaction" : {"React" : null},
    } as PostShap
function FeedPosts(props : PropsType) {

    const { loading, error, data } = Posts_Model.Get_Data();
    const User_Id =  Profile_Model.GetUser().GetId()
    const dispatch = useAppDispatch()
    const Helper_Functions : Helper_Functions  = {
        Filter : () => {
            let Post_Filter : Post_Filter = {}
            if(props.Page == "Profile"){Post_Filter['User_Id'] = User_Id}
            return Post_Filter
        }  
    }
    useEffect(() => {
        Posts_Model.Action_ON_Post(dispatch , Helper_Functions.Filter() , "Select")
    },[])
    return (
        <div className='FeedPosts'>

        {loading.Select ? <Post key={"loading"} Post={emptypost} Kind="Loading" /> : null}
        {!loading.Select && (
            <>
            {error !== null ? (
                <Post key={emptypost.main_post.id} Post={emptypost} Kind="Null" />
            ) : data.length === 0 ? (
                <Post key={emptypost.main_post.id} Post={emptypost} Kind="Null" />
            ) :  data.map((item) => <Post key={item.main_post.id} Post={item} Kind="Normal" /> )
            
            }
            </>
        )}
        </div>
    );
}


export default FeedPosts