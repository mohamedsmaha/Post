import { info, info_keys } from "@/Redux/Modules/Profile/ProfileTypes"

export type Props = {
    id : number
}
export type Static_data={
    middel : {id : number , text : string}[],
    info_box:{[key in info_keys] : {text : string , icon : React.ReactNode}}
}
export type Helper_Functions = {
    Handel_Box_info:(info : info) => JSX.Element
}