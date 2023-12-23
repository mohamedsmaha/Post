"Use Client"
import { User_Model } from '@/Helpers/Redux_models/Users/Users_Class'
import { APP_Folders } from '@/Static_Data/APP_Folders'
import React from 'react'
import { Props_Type } from './CommentBoxTypes'
import "@/Scss/Commen/Post/CommentsBox/CommentsBox.css"
import { Translate } from '@/Helpers/Translate'
    function CommentsBox(props : Props_Type){
        function Comment(){
            // We use Fake Data Here

            return<>
                <div className="Comment">
                    
                    <img src={`${APP_Folders.Users()}/2.jpeg`} alt="" />
                    <div className="Info">
                        <div className="Text">
                                hey mohamed welcome to Post i hope to accept my friend request
                        </div>
                    </div>
                </div>
            </>
        }
        return <>
            <div className={`CommentsBox ${props.Vaisablity}`}>
                <div className="Container">
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
                    <div className="Comments">
                            <Comment/>
                            <Comment/>
                            <Comment/>
                            <Comment/>
                            <Comment/>
                    </div>
                    <div className="Opinion">
                        <img src={`${APP_Folders.Users()}/${User_Model.GetMainImg()}`} alt="" />
                        <input type="text" placeholder={`${Translate("Add Comment")}`}/>
                    </div>
                </div>
            </div>
        </>
    }

export  const MemoCommentBox = React.memo(CommentsBox)
