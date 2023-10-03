"use client"
import React, { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import "@/Scss/Commen/Post/Post.css"
import { useAppSelector } from "@/Redux/Hooks";
import { Languagh } from "@/Lang/Main_file";
function Post(props:any) {
    let Redux = {
        DefaultData : useAppSelector((state) => state.DefaultData)
    }
    function UserInfo(){
        return(
            <div className="top">
                <div className="info">
                <img src={props.post.user.img} alt="" />
                <span className="username">{props.post.user.Name}</span>
                <span className="time">
                    {Languagh[Redux.DefaultData.Lang].Postcomponent.Time(props.post.time.number , props.post.time.unite)}
                </span>
                </div>
                <div className="posttopright">
                    <MoreVert />
                </div>
            </div>
        )
    }
    function Content(){
        return(
            <div className="content">
                <span className="text">{props.post.info.text}</span>
                <img src={props.post.info.content?.img} alt="" />
            </div>
        )
    }
    function Reactions(){
        return(
            <div className="reactions">
                <div className="likes">
                    <img src="./assets/like.png" alt="" className="likeicon" />
                    <img src="./assets/heart.png" alt="" className="likeicon" />
                    <span className="reacts">{Languagh[Redux.DefaultData.Lang].Postcomponent.Likes(props.post.info.interaction.likes)}</span>
                </div>
                <span className="comments">
                    {Languagh[Redux.DefaultData.Lang].Postcomponent.comments(props.post.info.interaction.comments)}
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
        <div className="post">
                <UserInfo/>
                <Content/>
                <Reactions/>
                <Actions/>
        </div>
    );
}

export default Post;