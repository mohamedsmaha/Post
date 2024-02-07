import { Close } from "@mui/icons-material"
import { Helper_Function, Props } from "./Delete_Card_Types"
import "@/Scss/Commen/Post/Delete_Card/Delete_Card.css"
import { Delete_Post } from "@/Redux/Modules/Post/PostTypes"
import { User_Model } from "@/Helpers/Redux_models/Users/Users_Class"
import { UserAction } from "@/Redux/Modules/User/UserTypes"
import { Posts_Model } from "@/Helpers/Redux_models/Posts/Posts.Class"
import { useAppDispatch } from "@/Redux/Hooks"
function Delete_Card(props : Props) {
    const dispatch = useAppDispatch()
    const UserAction : UserAction  = User_Model.Get_User_Action() as UserAction
    const Helper_Functions : Helper_Function= {
        DELETE: () => {
            let Data : Delete_Post = {
                User    : UserAction , 
                Post_id : 1
            }
            Posts_Model.Action_ON_Post(dispatch , Data , "Delete")
            props.Close_Function()
        },
    }
    return (
        <div className="Delete_Card_Component">
            <div className="Container">
                <div className="top">
                    <span onClick={() => props.Close_Function()}><Close/></span>
                </div>
                <div className="bottom">
                    <p>
                        Are you sure you want to delete this post {props.User.Username} ?
                    </p>
                    <div className="buttons">
                        <button onClick={() => {Helper_Functions.DELETE()}}>Yes</button>
                        <button
                            onClick={()=> props.Close_Function()}
                        >No</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delete_Card