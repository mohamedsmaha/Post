"use client"
import { MoreVert } from "@mui/icons-material";
import "@/Scss/Commen/Post/Post.css"
import { Static_images } from "@/Static_Data/Images";
import { APP_Folders } from "@/Static_Data/APP_Folders";
import { Translate, Translate_Object } from "@/Helpers/Translate";
import { PostElementsLangType } from "@/Lang/Types/Components/Post";
import { Content, Helper_Functions, PropsType, UserInfo } from "./PostTypes";
function Post(props: PropsType) {
// constants From props
    const {Post} = props
// Languagh
    const PostLangObj= Translate_Object("Post") as PostElementsLangType;
// Helper Funcion
    const Helper_Functions : Helper_Functions= {
        Reactions_images(item){
            switch(item){
                case "Like" : 
                    return <img src={`${Static_images.Reactions.like}`} alt="" className="likeicon" />
                case "Love" : 
                    return <img src={`${Static_images.Reactions.love}`} alt="" className="likeicon" />
                default :
                    null
            }
        },
        SelectShap(type){
            switch(type){
                case "New" : 
                    return <New_type/>
                case "Share":
                    return <Share_type/>
            }
        },
        TopReactions(){
            return <>
                {Helper_Functions.Reactions_images(Post.main_post.Reactions.numbers.order.first)}
                {Helper_Functions.Reactions_images(Post.main_post.Reactions.numbers.order.secound)}
                {Helper_Functions.Reactions_images(Post.main_post.Reactions.numbers.order.Third)}
            </>
        }
    }
// Small Component
    function Share_type(){
        return(
            <div className="Share">
                <UserInfo Post_data={Post.main_post}/>
                <Content  Post_data={Post.main_post}/>
                <div className="New">
                    {
                        Post.Share_post ?
                        <>
                        <UserInfo Post_data={Post.Share_post}/>
                        <Content  Post_data={Post.Share_post}/>
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
            <UserInfo Post_data={Post.main_post}/>
            <Content  Post_data={Post.main_post}/>
            <Reactions/>
            <Actions/>
        </div>
        )
    }
    function UserInfo(props : UserInfo){
        const {Post_data} = props
        return(
            <div className="top">
                <div className="info">
                <img src={`${APP_Folders.Users()}/${Post_data.User.img}`} alt="" />
                <span className="username">{Post_data.User.Username}</span>
                <span className="time">
                    {  PostLangObj.Time(Post_data.Data.number , Post_data.Data.unite)}
                </span>
                </div>
                { Post.main_post == Post_data? 
                    <div className="posttopright">
                        <MoreVert />
                    </div> : null
                }
            </div>
        )
    }
    function Content (props : Content){
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
                        {Helper_Functions.TopReactions()}
                    </div>
                    <span className="reacts">{PostLangObj.Likes(Post.main_post.Reactions.numbers.total)}</span>
                </div>
                <span className="comments">
                    {PostLangObj.Comments(1200)}
                </span>
            </div>
        )
    }
    function Actions(){
        return(
            <div className="actions">
                <div className="item">{Translate("Like")}</div>
                <div className="item">{Translate("Comment")}</div>
                <div className="item">{Translate("Share")}</div>
            </div>
        )
    }
    return (
        <div className={`Post_Component`}>
            {Helper_Functions.SelectShap(Post.main_post.type)}
        </div>
    );
}

export default Post;