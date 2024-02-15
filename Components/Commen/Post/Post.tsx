"use client"
import { Class, LocalDiningOutlined, MoreVert } from "@mui/icons-material";
import "@/Scss/Commen/Post/Post.css"
import { Static_images } from "@/Static_Data/Images";
import { APP_Folders } from "@/Static_Data/APP_Folders";
import { Translate, Translate_Object } from "@/Helpers/Translate";
import { PostElementsLangType } from "@/Lang/Types/Components/Post";
import { Content, HTMLDivElementRef, Helper_Functions, PropsType, UserInfo } from "./PostTypes";
import { useEffect, useRef, useState } from "react";
import { Post_Type, ReactsIcons } from "@/Redux/Modules/Post/PostTypes";
import React from "react";
import { StaticWordsElementsLangType } from "@/Lang/Types/Static_Words";
import { User_Model } from "@/Helpers/Redux_models/Users/Users_Class";
import { App_links } from "@/Static_Data/Links";
import Link from "next/link";
import PostForm from "./Create_Post/PostForm/PostForm";
import { MemoCommentBox } from "./CommentsBox/CommentsBox";
import { CommentsBox_Vaisablity } from "./CommentsBox/CommentBoxTypes";
import { Handel_click_outside_thetarget } from "@/Helpers/Helper Functions/Handel_click_outside_TheTarget";
import Delete_Card from "./DeleteCard/Delete_Card";

// Description 
    // This component manages and handles the interactions related to posting.
    // deal with Post Data Redux
// Missing
    // Need to deal with every scenario in the post data if it exist or not 
    // when Clicking on the image must be show the post in big screen
function Post(props: PropsType) {

// constants 
    const {Post}    = props
    const Avaliable_Reacts: ReactsIcons[] = ["Like", "Love"];
    const Default_React   : ReactsIcons   = "Like"
// Hooks
    const [Like_action_Box_Text    , SetReactsBoxText]       = useState<ReactsIcons>(Post.user_interaction.React ? Post.user_interaction.React : Default_React)
    const [User_React              , SetUserReact    ]       = useState<ReactsIcons | null>(Post.user_interaction.React)
    const [Reacts_Box              , SetReactsBox    ]       = useState<boolean>(false)
    const [CommentBox_ClassName    , SetCommentBoxClassName] = useState<CommentsBox_Vaisablity>(null)
    const [ShowPostForm            , SetShowPostForm     ]   = useState<Boolean>(false)
    const [Show_Post_Setting       , Set_PostSetting       ] = useState<Boolean>(false)
    const [PostFormMethod          , SetPostFormMethod     ] = useState<Post_Type>("Share")
    const [Show_Delete_post_Card   , SetDeleteCard         ] = useState<Boolean>(false)
    const Reacts_Box_Ref     :HTMLDivElementRef        = useRef(null)
    const Like_Action_Box_Ref:HTMLDivElementRef        = useRef(null)
    const Post_div_Ref       :HTMLDivElementRef        = useRef(null)
    const Post_Setting_div_Ref:HTMLDivElementRef       = useRef(null)   
    useEffect(() => {
        const HandleClickOutsideTheSetting = 
        Handel_click_outside_thetarget(Post_Setting_div_Ref , [Show_Post_Setting , () => Set_PostSetting(false)])
        // Close the post setting box if the click is not on it
        document.addEventListener("click", HandleClickOutsideTheSetting);
        return () => {
            document.removeEventListener("click", HandleClickOutsideTheSetting);
        };
    }, [Show_Post_Setting]);
// Languagh
    const PostLangObj   = Translate_Object("Post") as PostElementsLangType;
    const Static_Words  = Translate_Object("StaticWords") as StaticWordsElementsLangType;
// Helper Funcion
    const Helper_Functions : Helper_Functions= {
        Reactions_images(item , funn){
            switch(item){
                case "Like" : 
                    return <img src={`${Static_images.Reactions.like}`} alt="" className="Icon" onClick={funn} />
                case "Love" : 
                    return <img src={`${Static_images.Reactions.love}`} alt="" className="Icon" onClick={funn} />
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
                {Helper_Functions.Reactions_images(Post.main_post.Public_Interactions.numbers.order.first)}
                {Helper_Functions.Reactions_images(Post.main_post.Public_Interactions.numbers.order.secound)}
                {Helper_Functions.Reactions_images(Post.main_post.Public_Interactions.numbers.order.Third)}
            </>
        },
        Handel_React_onclick(React){
            let TextBox            = React ;
            let UserBoxReact  : ReactsIcons | null     = React ;
            if(React == User_React){TextBox = Default_React ; UserBoxReact = null} //   
            SetReactsBoxText(TextBox)
            SetUserReact(UserBoxReact)
            SetReactsBox(false)
        },
        Post_Mouse_Move(event){
            Like_Action_move()
            function Like_Action_move(){
                const Reacts_Box_Coordinates  = Reacts_Box_Ref.current?.getBoundingClientRect()
                const Like_Action_Coordinates = Like_Action_Box_Ref.current?.getBoundingClientRect()
                if(check1() || check2()
                    ){
                        SetReactsBox(true)
                    }
                else{
                    SetReactsBox(false)
                }
                function check1(){
                    // check if the mouse on the like action box
                    if( Like_Action_Coordinates &&
                        Like_Action_Coordinates?.bottom > event.clientY &&
                        Like_Action_Coordinates?.top   < event.clientY &&
                        Like_Action_Coordinates.left   < event.clientX &&
                        Like_Action_Coordinates?.right > event.clientX){
                            return true
                        }
                    return false
                }
                function check2(){
                    // check if the mouse on like action box or ( Reacts Box && Reacts box is true)
                    if(Like_Action_Coordinates && Reacts_Box_Coordinates && Reacts_Box  &&
                        Like_Action_Coordinates?.bottom> event.clientY && 
                        Reacts_Box_Coordinates?.top   < event.clientY &&
                        Like_Action_Coordinates?.left < event.clientX &&
                        Like_Action_Coordinates?.right> event.clientX ){
                        return true
                    }
                    return false;
                }
            }
        },
        Handel_CommentBox_ClassName(){
            if(CommentBox_ClassName == "Show"){SetCommentBoxClassName("Hide");}
            else{SetCommentBoxClassName("Show")}
            return
        },
        PostFormImage() {
            switch (PostFormMethod){
                case "Share" :
                    return(
                        <div className="New">
                            <UserInfo Static={true} Post_data={Post.Share_post ? Post.Share_post: Post.main_post}/>
                            <Content  Post_data={Post.Share_post ? Post.Share_post: Post.main_post}/>
                        </div>
                        )
                case "Update" : 
                    return(
                        <div className="New">
                            {Post.Share_post ? <UserInfo Post_data={Post.Share_post} /> : null}
                            <Content  Updata={true} Post_data={Post.Share_post ? Post.Share_post: Post.main_post}/>
                        </div>
                        )
                default :
                        <></>
                    
            }
        },
        Select_Option(Kind) {
            switch(Kind){
                case("Normal"):
                    return Normal_post()
                case("Loading"):
                    return Loading_Post()
                case ("Null"):
                    return Null_post()
            }
        },
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
                        <UserInfo Static={true} Post_data={Post.Share_post}/>
                        <Content  Post_data={Post.Share_post}/>
                        </> : null
                    }
                </div>
                <Analysis/>
                <Actions/>
            </div>
            )
    }
    function New_type(){
        return(
        <div className="New">
            <UserInfo Post_data={Post.main_post}/>
            <Content  Post_data={Post.main_post}/>
            <Analysis/>
            <Actions/>
        </div>
        )
    }
    function UserInfo(props : UserInfo){
        const {Post_data} = props
        return(
            <div className="UserInfo">
                <div className="Info">
                    <Link href={`${App_links.Profile(Post_data.User.id)}`}>
                        <img src={`${APP_Folders.Users()}/${Post_data.User.img}`} alt="" />
                    </Link>
                    <span className="Username">{Post_data.User.Username}</span>
                    <span className="Time">
                        {  Static_Words.Time(Post_data.Date.number , Post_data.Date.unite)}
                    </span>
                </div>
                {  ( props.Static != true && Post_data.User.id == User_Model.GetId() ) ? // Check if this user own the post 
                    <div className="Setting">
                        <span onClick={() => Set_PostSetting(!Show_Post_Setting)}><MoreVert /></span>
                        {Show_Post_Setting ? <Post_Setting/> : null}
                    </div> : null
                }
            </div>
        )
    }
    function Content (props : Content){
        const {Post_data} = props
        return(
            <div className="Content">
                {props.Updata != true ? <span className="Text">{Post_data.info.text}</span> : null}
                {Post_data.info.img   ? <img src={`${Post_data.info.img}`} alt="" /> : null }
                {Post_data.info.vidoe ? <video src = {`${APP_Folders.Posts("videos")}/${Post_data.info.vidoe}`} /> : null}
            </div>
        )
    }
    function Analysis(){
        return(
            <div className="Analysis">
                {Post.main_post.Public_Interactions.numbers.total > 0 ?                 
                    <div className="Likes">
                        <div className="Reactions">
                            {Helper_Functions.TopReactions()}
                        </div>
                        <span className="ReactsNumber">{PostLangObj.Likes(Post.main_post.Public_Interactions.numbers.total)}</span>
                    </div>:null
                }
                {Post.main_post.Public_Interactions.Comments > 0 ?                 
                    <span className="Comments" onClick={() => {Helper_Functions.Handel_CommentBox_ClassName()}}>
                        {PostLangObj.Comments(Post.main_post.Public_Interactions.Comments)}
                    </span> : null
                }
            </div>
        )
    }
    function Actions(){
        
        function Like(){
            return(
            <div className={`Item Reacts ${User_React ? User_React : ''}`}  ref ={Like_Action_Box_Ref}>
                    <div className="Icons"  ref  ={Reacts_Box_Ref}
                                            style={{display: (Reacts_Box ? "flex" : "none")}}>
                        {Avaliable_Reacts.map((item,index) => (
                            <React.Fragment key={index}>
                                {Helper_Functions.Reactions_images(item , ()=>{Helper_Functions.Handel_React_onclick(item)})}
                            </React.Fragment>
                        ))}
                    </div>
                    {Translate(Like_action_Box_Text)}
                    </div>
            )
        }
        return(
            <div className="Actions">
                <Like></Like>
                <div className="Item" onClick={() => Helper_Functions.Handel_CommentBox_ClassName()}>{Translate("Comment")}</div>
                <div className="Item" onClick={() => 
                                    {SetShowPostForm(true)  , SetPostFormMethod("Share") }}
                                    >
                                    {Translate("Share")}
                </div>
            </div>
        )
    }
    function Post_Setting(){
        return <>
            <div className="Setting_Box" ref={Post_Setting_div_Ref}>
                <div className="container">
                    <ul>
                        <li onClick={()=>{
                            SetPostFormMethod("Update")
                            SetShowPostForm(true)
                            Set_PostSetting(false)
                        }}>Updata</li>
                        <li
                            onClick={() => {
                                Set_PostSetting(false)
                                SetDeleteCard(true)
                            }}
                        >Delete</li>
                    </ul>
                </div>
            </div>
        </>
    }
    // Kinds or Options
        function Normal_post(){
        return <>
            <div className={`Post_Component`} ref={Post_div_Ref} onMouseMove={(e: any) => Helper_Functions.Post_Mouse_Move(e.nativeEvent)}>
                {Helper_Functions.SelectShap(Post.main_post.type)}
                <MemoCommentBox Vaisablity={CommentBox_ClassName}/>
            </div>
            {ShowPostForm? <PostForm 
                                        key="res" 
                                        Close = {() => SetShowPostForm(false)} 
                                        Method= {PostFormMethod}
                                        SharePost={{"Data" : Post , "Image" :Helper_Functions.PostFormImage()}}/> : null}
            {
                Show_Delete_post_Card ? 
                    <Delete_Card Close_Function={() => SetDeleteCard(false)} 
                                User = {Post.main_post.User} Post_id={props.Post.main_post.id}/> :
                    null
            }
            </>
        }
        function Loading_Post(){
            return <>
                <div className="Loading_Post_Component">
                    <div className="UserInfo">
                        <div className="Info">
                            <img src= {`${Static_images.unknown}`}></img>
                        </div>
                    </div>
                    <div className="Content">
                        <div className="background">
                            <span className="loader"></span>
                        </div>
                    </div>
                </div>
            </>
        }
        function Null_post(){
            return <>
                <div className="Null_Post_Component">
                    . Sorry there is no more posts for you today .
                </div>
            </>
        }
    return (
    <>
        {Helper_Functions.Select_Option(props.Kind)}
    </>
    );
}

export default Post;