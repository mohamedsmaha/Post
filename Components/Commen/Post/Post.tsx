"use client"
import React, { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import "@/Scss/Commen/Post/Post.css"
import { useAppSelector } from "@/Redux/Hooks";
import { Languagh } from "@/Lang/Main_file";
import { Static_images } from "@/Static_Data/Images";
import { PostData, Post_info } from "@/Redux/Modules/Post/PostTypes";
import { APP_Folders } from "@/Static_Data/APP_Folders";
import { ReactsIcons } from "@/Redux/Modules/Post/PostTypes";
function Post(props:{post : PostData}) {
    const {post} = props
    let Redux = {
        DefaultData : useAppSelector((state) => state.DefaultData)
    }
    const helper_functions = {
        TopReactions(item : ReactsIcons | null){
            switch(item){
                case "Like" : 
                    return <img src={`${Static_images.Reactions.like}`} alt="" className="likeicon" />
                case "Love" : 
                    return <img src={`${Static_images.Reactions.love}`} alt="" className="likeicon" />
                default :
                    null
            }
        }
    }
    function Share_type(){
        return(
            <div className="Share">
                <UserInfo Post_data={post.main_post}/>
                <Content  Post_data={post.main_post}/>
                <div className="New">
                    {
                        post.Share_post ?
                        <>
                        <UserInfo Post_data={post.Share_post}/>
                        <Content  Post_data={post.Share_post}/>
                        </> : null
                    }
                </div>
                <Reactions/>
                <Actions/>
            </div>
            )
    }
    function New_type(){
        return(
        <div className="New">
            <UserInfo Post_data={post.main_post}/>
            <Content  Post_data={post.main_post}/>
            <Reactions/>
            <Actions/>
        </div>
        )
    }
    function UserInfo(props : {Post_data : Post_info}){
        const {Post_data} = props
        return(
            <div className="top">
                <div className="info">
                <img src={`${APP_Folders.Users()}/${Post_data.User.img}`} alt="" />
                <span className="username">{Post_data.User.Username}</span>
                <span className="time">
                    {Languagh[Redux.DefaultData.Lang].Postcomponent.Time(Post_data.Data.number , Post_data.Data.unite)}
                </span>
                </div>
                { post.main_post == Post_data? 
                    <div className="posttopright">
                        <MoreVert />
                    </div> : null
                }
            </div>
        )
    }
    function Content(props : {Post_data : Post_info}){
        const {Post_data} = props
        return(
            <div className="content">
                <span className="text">{Post_data.info.text}</span>
                {Post_data.info.img ? <img src={`${APP_Folders.Posts("images")}/${Post_data.info.img}`} alt="" /> : null }
            </div>
        )
    }
    function Reactions(){
        return(
            <div className="reactions">
                <div className="likes">
                    <div className="reactions">
                        {helper_functions.TopReactions(post.main_post.Reactions.numbers.order.first)}
                        {helper_functions.TopReactions(post.main_post.Reactions.numbers.order.secound)}
                        {helper_functions.TopReactions(post.main_post.Reactions.numbers.order.Third)}

                    </div>
                    <span className="reacts">{Languagh[Redux.DefaultData.Lang].Postcomponent.Likes(post.main_post.Reactions.numbers.total)}</span>
                </div>
                <span className="comments">
                    {Languagh[Redux.DefaultData.Lang].Postcomponent.Comments(1200)}
                </span>
            </div>
        )
    }
    function Actions(){
        return(
            <div className="actions">
                <div className="item">{Languagh[Redux.DefaultData.Lang].Like}</div>
                <div className="item">{Languagh[Redux.DefaultData.Lang].Comment}</div>
                <div className="item">{Languagh[Redux.DefaultData.Lang].Share}</div>
            </div>
        )
    }
    return (
        <div className={`post ColorTheme_${Redux.DefaultData.ColorTheme}`}>
            {post.main_post.type == "New"  ? <New_type/> : <Share_type/>}
        </div>
    );
}

export default Post;