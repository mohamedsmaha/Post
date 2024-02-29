import { UserAction } from "@/Redux/Modules/User/UserTypes"

export type Loading_Action = {"Select" : Boolean , "Update" : Boolean , "Insert" : Boolean , "Delete" : Boolean}
export type Action_Keys = "Select" | "Update" | "Insert" | "Delete"

export type Delete_item = {
    User    : UserAction     ,
    item_id : number
}