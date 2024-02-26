import { Comment_Types } from '@/Redux/Modules/Comments/CommentTypes'
import { APP_Folders } from '@/Static_Data/APP_Folders'
import { Chat, FavoriteBorder, FavoriteOutlined, MoreVert } from '@mui/icons-material'
import React from 'react'
import { Comment_props } from './CommentTypes'
import "@/Scss/Commen/Comment/Comment.css"
function Comment(Props:Comment_props){  
    // We use Fake Data Here
    const Date = Props.Date
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
                {Props.Post_Date.User.id == Date.User.id ? 
                    <div className="Edit">
                        <MoreVert/>
                    </div>
                :null}
            </div>
        </>
    }
    return<>
        <div className="Comment">
            <Post_Comment/>
        </div>
    </>
}

export default Comment