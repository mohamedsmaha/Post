import { Close } from "@mui/icons-material"
import { Helper_Function, Props } from "./Delete_Card_Types"
import "@/Scss/Commen/Post/Delete_Card/Delete_Card.css"
import { User_Model } from "@/Helpers/Redux_models/Users/Users_Class"
import { UserAction } from "@/Redux/Modules/User/UserTypes"
import { Posts_Model } from "@/Helpers/Redux_models/Posts/Posts.Class"
import { useAppDispatch } from "@/Redux/Hooks"
import { Delete_item } from "@/Ts/Action"
import { Comments_Model } from "@/Helpers/Redux_models/Comments/Comments_Class"
import { Delete_Comment } from "@/Redux/Modules/Comments/CommentTypes"
function Delete_Card(props : Props) {
    const dispatch = useAppDispatch()
    const UserAction : UserAction  = User_Model.Get_User_Action() as UserAction
    const Helper_Functions : Helper_Function= {
        Choose_path : (Data) => {
            switch(props.Option.text){
                case "Post" : 
                    return Posts_Model.Action_ON_Post(dispatch , Data , "Delete")
                case "Comment" :
                    return Comments_Model.GetActions(dispatch , "Delete" , Data as Delete_Comment)
            }
        },
        Prepare_Data : (Data) =>{
            switch(props.Option.text){
                case "Post" : 
                    return Data
                case "Comment" : 
                    let newData : Delete_Comment= {...Data , 
                        "type"      : props.Option.Data.Comment_type ,
                        "Search_ID" : props.Option.Data.Search_ID
                    }
                    return newData
            }
        },
        DELETE: () => {
            let Data    : Delete_item = {
                User    : UserAction , 
                item_id : props.item_id
            }
            Helper_Functions.Choose_path(Helper_Functions.Prepare_Data(Data))
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
                        Are you sure you want to delete this {props.Option.text} ?
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