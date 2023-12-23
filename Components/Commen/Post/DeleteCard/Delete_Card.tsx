import { Close } from "@mui/icons-material"
import { Props } from "./Delete_Card_Types"
import "@/Scss/Commen/Post/Delete_Card/Delete_Card.css"
function Delete_Card(props : Props) {
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
                        <button>Yes</button>
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