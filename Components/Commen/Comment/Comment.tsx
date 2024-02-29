import { Comment_Types } from '@/Redux/Modules/Comments/CommentTypes'
import { APP_Folders } from '@/Static_Data/APP_Folders'
import { Chat, FavoriteBorder, FavoriteOutlined, MoreVert } from '@mui/icons-material'
import React, { useState } from 'react'
import { Comment_props } from './CommentTypes'
import "@/Scss/Commen/Comment/Comment.css"
import { User_Model } from '@/Helpers/Redux_models/Users/Users_Class'
import Delete_Card from '@/Helpers/Small_Helper_Components/DeleteCard/Delete_Card'
import Setting_Box from '@/Helpers/Small_Helper_Components/Setting_Box/Setting_Box'
function Comment(Props:Comment_props){  
    const Date = Props.Date
    const User = User_Model
    const [Show_setting   , Set_Setting]  = useState(false)
    const [Delete_Comment , Set_Delete] = useState(false) 
    // Options
    function Post_Comment(){
        function Info(){
            return <>
                <div className="info">
                <div className="Up">
                    <div className="NameAndTime">
                        <p className='Name'>{Props.Date.User.Username}</p>
                        <p className='Time'>{Props.Date.Data.number} {Props.Date.Data.unite} </p>
                    </div>
                    <div className="Content">
                        {Props.Date.info.Text}
                        {/* <img src= {`${APP_Folders.Users()}/4.jpeg`} alt="" /> */}

                    </div>
                </div>
                <div className="Actions">
                    <div className="Reacts">
                        <div>Liks   : {Props.Date.Reacts.Likes}
                            {Date.user_Interaction ? <FavoriteOutlined/> : < FavoriteBorder/>}
                        </div>
                        {/* <div>Replays: {Props.Date.Reacts.Replays}<Chat/></div> */}
                        </div>
                </div>
                </div>
            </>
        }
        return <>
            <div className="Post_Comment">
                <img src= {`${APP_Folders.Users()}/${Props.Date.User.img}`} alt="" />
                <Info/>
                {Props.Post_Date.User.id == Date.User.id  || 
                    Props.Date.User.id == User.GetId()
                ? 
                <Setting_Box 
                    key = {Props.Post_Date.id}
                    elements= {[{"name" : "Update" , "onclick" : () => {}},
                                {"name" : "Delete" , "onclick" : () => {Set_Delete(true)}}
                ] }
                    Control_ref={{"value" : Show_setting , "State_Function" : Set_Setting}}
                /> 

                :null}
            </div>
        </>
    }
    return<>
        <div className="Comment">
            <Post_Comment/>
        </div>
        {Delete_Comment ? <Delete_Card Close_Function={() => Set_Delete(false)}
                                    Option={{"text" : "Comment" , "Data" : {"Comment_type" : "Post" , 'Search_ID' :Props.Date.Search_ID} }} item_id={Props.Date.id}
        /> : null}
    </>
}

export default Comment