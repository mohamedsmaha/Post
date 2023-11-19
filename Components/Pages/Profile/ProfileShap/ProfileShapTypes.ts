import { Box_info_keys, Box_info_type } from "@/Redux/Modules/User/UserTypes"

export type Bottom_Components_type = "Main" | "Friends"
export type Props = {
    id : number
}
export type Static_data={
    middel : {id : number , text :Bottom_Components_type}[],
    info_box:{[key in Box_info_keys] : {text : string , icon : React.ReactNode}}
}
export type Helper_Functions = {
    Handel_Box_info:(info : Box_info_type) => JSX.Element,
    Handel_Bottom_component:(Component_name : Bottom_Components_type) => void,
    Handel_Choose_Button_Component:(Component_name : Bottom_Components_type)=> JSX.Element
}
