"use client"
import React, { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import "@/Scss/Commen/Post/Post.css"
import { useAppSelector } from "@/Redux/Hooks";
import { Languagh } from "@/Lang/Main_file";
import { Static_images } from "@/Static_Data/Images";
function Post(props:any) {
    const {post} = props
    let Redux = {
        DefaultData : useAppSelector((state) => state.DefaultData)
    }
    function UserInfo(){
        return(
            <div className="top">
                <div className="info">
                <img src={post.user.img} alt="" />
                <span className="username">{post.user.Name}</span>
                <span className="time">
                    {Languagh[Redux.DefaultData.Lang].Postcomponent.Time(post.time.number , post.time.unite)}
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
                <span className="text">{post.info.text}</span>
                <img src={post.info.content?.img} alt="" />
            </div>
        )
    }
    function Reactions(){
        return(
            <div className="reactions">
                <div className="likes">
                    <div className="reactions">
                        <img src={`${Static_images.Reactions.like}`} alt="" className="likeicon" />
                        <img src={`${Static_images.Reactions.love}`} alt="" className="likeicon" />
                    </div>
                    <span className="reacts">{Languagh[Redux.DefaultData.Lang].Postcomponent.Likes(post.info.interaction.likes)}</span>
                </div>
                <span className="comments">
                    {Languagh[Redux.DefaultData.Lang].Postcomponent.comments(post.info.interaction.comments)}
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
                <UserInfo/>
                <Content/>
                <Reactions/>
                <Actions/>
        </div>
    );
}

export default Post;