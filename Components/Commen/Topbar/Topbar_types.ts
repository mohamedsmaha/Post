import { DefaultDataReduxType } from "@/Redux/UnFetched_data/Deafult_data/Default_data_type"
import { Pages_Name } from "@/Doc/Tree/page";
export type icon_screen = 'Big_screen' | "Small_screen" | "Both"
export type main_icons  = 'Home'       | "Chat"         | "Notifications"
export type Props_Types = {
    Page : Pages_Name
}
type Left_icon_name = "Setting" | "Chat" | "Notifications"
type main_icon = {
    id :number , 
    name:main_icons,
    icon : React.ReactNode ,
    find : icon_screen ,
    link :string
}
type left_icon = {
    id : number ,
    icon:React.ReactNode ,
    name: Left_icon_name
}
export type TopbarStaticdata = {
    main_icons : main_icon[],
    left_icons : left_icon[]
} 
export type HelperFunctions  = {
    Left_icon_click : (name : Left_icon_name) => void ,
    Is_that_Actice  : (name : main_icons)     => boolean
} 