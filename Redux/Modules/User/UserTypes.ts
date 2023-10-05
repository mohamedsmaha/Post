import { avaliable_lang } from "@/Lang/Main_file";

export type User = {
    id   :number ,
    Email:string ,
    Phonenumber:number,
    Username   :string,
    password   :string,
    birthday   :string,
    img        :string,
    lang       :avaliable_lang,
    colortheme :number,
    ApiToken   :number,
}

export type User_for_Post = {
    id       : number ,
    Username : string ,
    img      : string 
}