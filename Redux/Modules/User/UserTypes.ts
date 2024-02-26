import { avaliable_lang } from "@/Lang/Main_file";

export type User_Type = {
    id         :number ,
    Email      :string ,
    Phonenumber:string,
    Username   :string,
    password   :string,
    birthday   :string,
    img        :string,
    secound_img:string
    lang       :avaliable_lang,
    colortheme :colortheme_option,
    ApiToken   ?:string,
    Status     ?:"Married" | "Single" 
    From       ?: string
}
export type colortheme_option = 1
export type anyUser_Type= {
    id       : number ,
    Username : string ,
    img      : string 
}
export type User_API_Actions = {
    
}
export type UserRedux = {
    loading : boolean ,
    error   : Error | string | null
    data    : User_Type
}
export type UserAction = {
    UserID   :number ,
    UserToken:string
}
export type Box_info_keys = "Status" | "From" | "Born" | "Phone"
export type Box_info_type = {
    "Status"    ?: "Married" | "Single" ,
    "From"      ?: string ,
    "Born"      ?: string ,
    "Phone"     ?: string
}
