"Use Client"
import { User_Model } from '@/Helpers/Redux_models/Users/Users_Class'
import { APP_Folders } from '@/Static_Data/APP_Folders'
import React, { useEffect, useRef, useState } from 'react'
import { Helper_Function, Props_Type } from './PostCommentBoxTypes'
import "@/Scss/Commen/Post/PostCommentsBox/PostCommentsBox.css"
import { Translate } from '@/Helpers/Translate'
import Comment from '../../Comment/Comment'
import { CommentShap, Comments_Filter, Create_Comment } from '@/Redux/Modules/Comments/CommentTypes'
import { useAppDispatch } from '@/Redux/Hooks'
import { Comments_Model } from '@/Helpers/Redux_models/Comments/Comments_Class'
import { UserAction } from '@/Redux/Modules/User/UserTypes'
import { Send } from '@mui/icons-material'
let Fake_Date: CommentShap[] = [
    {
        "Search_ID" : 1 ,
        "Data"      : {"number" : 1 , "unite" : "Minute"} ,
        "User"      : {"id" : 4 , "Username" : "mohamed sabry" , "img" :"1.jpeg" },
        "id"        : 1 ,
        "info"      : {"Text" : "lol hey my name is mohamed and i love you"},
        "user_Interaction" : false,
        "Reacts"           : {"Likes": 12 , "Replays" : 100}
    }
]
function PostCommentsBox(props : Props_Type){
    const UserAction      = User_Model.Get_User_Action() as UserAction
    const Dispatch        = useAppDispatch()
    const [text , settext]= useState<string>("")
    const text_ref:React.RefObject<HTMLInputElement> = useRef(null)
    const Helepr_Function : Helper_Function = {
        Comments_Filter : () => {
            let Date : Comments_Filter = {
                "Search_Id" : props.Post_Date.id ,
                "User"      : UserAction ,
                "type"      : "Post",
            }
            return Date
        },
        Create_Comment : () => {
            let Data : Create_Comment= {
                "Date"      : new Date ,
                "Search_ID" : props.Post_Date.id,
                "User"      : UserAction ,
                "info"      : {"Text" : text},
                "type"      : "Post"

            }
            Comments_Model.GetActions(Dispatch , "Insert" , Data)
            return ;
        }
    }
    useEffect(() => {
        const textarea = text_ref.current;
        if (textarea) {
        // Set the selection to the end of the content
        const textLength = textarea.value.length;
        textarea.setSelectionRange(textLength, textLength);
        // Focus on the textarea
        textarea.focus();
        }
    }, [text]);
    useEffect(() => {
        if(props.Vaisablity == "Show"){
            Comments_Model.GetActions(Dispatch , "Select" , Helepr_Function.Comments_Filter())
        }
    } , [props.Vaisablity])
    function Header(){
        return <>
            <div className="Header">
                <p className="Title">{Translate("Comments")}</p>
                <div className="Order">
                    <label htmlFor="CommentsOrder">{Translate("Order By")}</label>
                    <select name="" id="CommentsOrder">
                        <option value="">{Translate("Newest")}</option>
                        <option value="">{Translate("Importance")}</option>
                        <option value="">{Translate("Friends")}</option>
                    </select>
                </div>
            </div>
        </>
    }
    function Opinion(){
        return <div className="Opinion">
            <img src={`${APP_Folders.Users()}/${User_Model.GetMainImg()}`} alt="" />
            <input type="text" 
                    ref  = {text_ref}
                    value={text} placeholder={`${Translate("Add Comment")}`}
                    onChange={(e) =>{settext(e.target.value)} }/>
            <span onClick={() => {Helepr_Function.Create_Comment()}}>
                <Send/>
            </span>
        </div>
    }
    function Comments(){
        // console.log(props.Comments)
        return <div className="Comments">
                
                {props.Comments.data.map(item => 
                    <Comment option='Post' key={item.id} Post_Date={props.Post_Date} Date={item}/>
                    )}
        </div>
    }
    return <>
        <div className={`CommentsBox ${props.Vaisablity}`}>
            <div className="Container">
                <Header/>
                <Comments/>
                <Opinion/>
            </div>
        </div>
    </>
}

export  const MemoCommentBox = React.memo(PostCommentsBox)
