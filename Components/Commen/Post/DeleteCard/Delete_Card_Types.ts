import { anyUser_Type } from "@/Redux/Modules/User/UserTypes"

export type Props = {
    Close_Function : () => void     ,
    User           : anyUser_Type   ,
    Post_id        : number
}
export type Helper_Function = {
    DELETE : () => void
}
