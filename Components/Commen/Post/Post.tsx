"use client"
import { Class, LocalDiningOutlined, MoreVert } from "@mui/icons-material";
import "@/Scss/Commen/Post/Post.css"
import { Static_images } from "@/Static_Data/Images";
import { APP_Folders } from "@/Static_Data/APP_Folders";
import { Translate, Translate_Object } from "@/Helpers/Translate";
import { PostElementsLangType } from "@/Lang/Types/Components/Post";
import { For_Voting, Helper_Functions, Main_Kind_Data, PropsType, UserInfo } from "./PostTypes";
import { useEffect, useRef, useState } from "react";
import { Content_info, Post_Type, Voting_info } from "@/Redux/Modules/Post/PostTypes";
import React from "react";
import { StaticWordsElementsLangType } from "@/Lang/Types/Static_Words";
import { User_Model } from "@/Helpers/Redux_models/Users/Users_Class";
import { App_links } from "@/Static_Data/Links";
import Link from "next/link";
import PostForm from "./Create_Post/PostForm/PostForm";
import { MemoCommentBox } from "./PostCommentsBox/PostCommentsBox";
import { PostCommentsBox_Vaisablity } from "./PostCommentsBox/PostCommentBoxTypes";
import Delete_Card from "../../../Helpers/Small_Helper_Components/DeleteCard/Delete_Card";
import { ReactsIcons } from "@/Ts/ReactsIcons";
import Setting_Box ,{ Setting_element } from "@/Helpers/Small_Helper_Components/Setting_Box/Setting_Box";
import { HTMLDivElementRef } from "@/Ts/Hooks_Types";
import Loading from "@/Helpers/Small_Helper_Components/Loading/Loading";
import { Switch } from "@mui/material";

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
    const [CommentBox_ClassName    , SetCommentBoxClassName] = useState<PostCommentsBox_Vaisablity>(null)
    const [ShowPostForm            , SetShowPostForm     ]   = useState<boolean>(false)
    const [Show_Post_Setting       , Set_PostSetting       ] = useState<boolean>(false)
    const [PostFormMethod          , SetPostFormMethod     ] = useState<Post_Type>("Share")
    const [Show_Delete_post_Card   , SetDeleteCard         ] = useState<Boolean>(false)
    const Reacts_Box_Ref     :HTMLDivElementRef        = useRef(null)
    const Like_Action_Box_Ref:HTMLDivElementRef        = useRef(null)
    const Post_div_Ref       :HTMLDivElementRef        = useRef(null)
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
                    let post  = Post.Share_post ? Post.Share_post: Post.main_post
                    return(
                        <div className="New">
                            <UserInfo Static={true} Post_data={post}/>
                            {Helper_Functions.DeterMine_Post_Kind(post.kind , {"Post_data" : post})}
                        </div>
                        )
                case "Update" : 
                    if(Post.Share_post){
                        return(
                                <div className="New">
                                    <UserInfo Post_data={Post.Share_post}/>
                                    {Helper_Functions.DeterMine_Post_Kind(Post.Share_post.kind , {"Post_data" : Post.Share_post})}
                                </div>
                                )
                    }
                    else{return <></>}
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
        DeterMine_Post_Kind : (Kind , Data) =>{
            console.log(Data , Kind)
            switch(Kind){
                case "Content" :
                    return <Content {...Data} />  
                case "Voting" :
                    return <Voting {...Data}/>
                default :
                    return <></>
            }
            return <></>
        },
        InterAction(Action){
                const Vote = (Data : For_Voting) => {
                        Data.Data.input.defaultChecked = true;
                        console.log(Data.Data.input.value)
                    }
                switch (Action.kind){
                    case "Vote" : 
                        Vote(Action)
                }
                
        }
    }
// Small Component
    function Share_type(){
        return(
            <div className="Share">
                <UserInfo Post_data={Post.main_post}/>
                {Helper_Functions.DeterMine_Post_Kind(Post.main_post.kind  , {"Post_data" :  Post.main_post} )}
                <div className="New">
                    {
                        Post.Share_post ?
                        <>
                        <UserInfo Static={true} Post_data={Post.Share_post}/>
                        {Helper_Functions.DeterMine_Post_Kind(Post.Share_post.kind , {"Post_data" :  Post.Share_post} )}
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
            {Helper_Functions.DeterMine_Post_Kind( Post.main_post.kind , {"Post_data" :  Post.main_post} )}
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
                {  ( true && props.Static != true && Post_data.User.id == User_Model.GetId() ) ? // Check if this user own the post 
                        <Post_Setting/> : null}
            </div>
        )
    }
    function Analysis(){
        const Votes = ()=>{
            let info = Post.main_post.info as Voting_info 
            if(Post.main_post.kind != "Voting" || info.Number_Of_Votes < 0){return <></>}
            return <span className="Vote">
                        {info.Number_Of_Votes} vote
                    </span>
        }
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
                <div className="Left">
                    {Post.main_post.Public_Interactions.Comments > 0 ?                 
                        <span className="Comments" onClick={() => {Helper_Functions.Handel_CommentBox_ClassName()}}>
                            {PostLangObj.Comments(Post.main_post.Public_Interactions.Comments)}
                        </span> : null
                    }
                    {Post.main_post.Public_Interactions.share > 0 ?                 
                        <span className="Shares" onClick={() => {Helper_Functions.Handel_CommentBox_ClassName()}}>
                            {Post.main_post.Public_Interactions.share} share 
                        </span> : null
                    }
                    <Votes/>
                </div>
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
        let date : Setting_element[]=[
            {"name" : "update" , "onclick" : () => {
                SetPostFormMethod("Update")
                SetShowPostForm(true)
                Set_PostSetting(false)
            }},
            {"name" : "delete" , "onclick" : () => {
                Set_PostSetting(false)
                SetDeleteCard(true)
            }}
        ] 
        return <Setting_Box elements={date} 
        Control_ref={{"value" : Show_Post_Setting , "State_Function" : Set_PostSetting }}/>
    }
    // Post Kinds 
        function Content (props : Main_Kind_Data){
            const {Post_data} = props;
            let info  = Post_data.info as Content_info
            return(
                <div className="Content">
                    {props.Updata != true ? <span className="Text">{info.text}</span> : null}
                    {info.img   ? <img src={`${info.img}`} alt="" /> : null }
                    {info.vidoe ? <video src = {`${APP_Folders.Posts("videos")}/${info.vidoe}`} /> : null}
                </div>
            )
        }
        function Voting(  props:Main_Kind_Data){
            const {Post_data} = props;
            let info  = Post_data.info as Voting_info
            return <>
                <div className="Voting">
                    <div className="Question">{info.Question}</div>
                    <div className="Options">
                        {info.Options.map((item,index) => ( 
                            <div key={item.id} className="Option">
                            <input 
                            type="radio"  value={`${item.id}`}  defaultChecked={false} name={`choose_${Post.main_post.id}`}  id={`${item.id}${index}"choice"`} 
                            onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) => { 
                                const target = e.currentTarget as HTMLInputElement;
                                Helper_Functions.InterAction({ 
                                kind: 'Vote', 
                                Data: { 
                                    input: target
                                } 
                                }); 
                            }} 
                            />


                                <label className="info" htmlFor={`${item.id}${index}"choice"`}>
                                    <span className="text">{item.text}</span>
                                    <span className="Number_of_Vots">{item.Number_Of_Votes}</span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        }
    // Options
        function Normal_post(){
        return <>
            <div className={`Post_Component`} ref={Post_div_Ref} onMouseMove={(e: any) => Helper_Functions.Post_Mouse_Move(e.nativeEvent)}>
                {Helper_Functions.SelectShap(Post.main_post.type)}
                <MemoCommentBox Vaisablity={CommentBox_ClassName}
                                Comments  ={Post.Comments}
                                Post_Date ={{"User" : Post.main_post.User  , "id" : Post.main_post.id}}
                                
                                />
            </div>
            {ShowPostForm? <PostForm 
                                        key="res" 
                                        Close      = {() => SetShowPostForm(false)} 
                                        Method     = {PostFormMethod}
                                        Source_Post= {{"Data" : Post , "Image" :Helper_Functions.PostFormImage()}}/> : null}
            {
            Show_Delete_post_Card ? 
                <Delete_Card Close_Function={() => SetDeleteCard(false)} 
                            item_id = {props.Post.main_post.id}
                            Option={{"Data" : {} , "text" : "Post"}}
                            /> :
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
                    <Loading/>
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
        {Helper_Functions.Select_Option(props.Options)}
    </>
    );
}

export default Post;