import { Post_Filter } from "@/Redux/Modules/Post/PostTypes"

export type PropsType = {
    Page : "Home" | "Profile"
}
export type Helper_Functions = {
    "Filter" : () => Post_Filter
}