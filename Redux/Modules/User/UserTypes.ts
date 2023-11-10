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
    colortheme :number,
    ApiToken   :number,
    Status     ?:"Married" | "Single" 
    From       ?: string
}
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

