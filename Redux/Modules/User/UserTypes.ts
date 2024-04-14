import { avaliable_lang } from "@/Lang/Main_file";
import { Key } from "@mui/icons-material";

// we use it only in User imaginary Database, just remeber you about what data we have
export type All_User_Data = {
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
    ApiToken   :string,
    Status     :"Married" | "Single" 
    From       : string
}

export type User_Type =NormaL_User_Type & {
    lang       :avaliable_lang,
    colortheme :colortheme_option,
    ApiToken   :string,
}

export type NormaL_User_Type  = {
    id         :number ,
    Email      ?:string ,
    Phonenumber?:string,
    Username   :string,
    birthday   ?:string,
    img        :string,
    secound_img:string
    Status     ?:"Married" | "Single" 
    From       ?: string
}

export type colortheme_option = 1
export type anyUser_Type= {
    id       : number ,
    Username : string ,
    img      : string 
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
export type Box_info_keys  = "Status" | "From" | "Born" | "Phone" | "Email"
export type Box_info_type  = {
    "Status"    ?: "Married" | "Single" ,
    "From"      ?: string ,
    "Born"      ?: string ,
    "Phone"     ?: string ,
    "Email"     ?: string 
}

// Helper Types
    // Login
        export type User_Login_Request = {
            "Password" : string ,
            "UserName" : string 
        }
        export type User_Login_Response={
            Login : boolean
            data  : User_Type | null
        }
