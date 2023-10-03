import { Arbic } from "./Arbic/Arbic"
import { English } from "./English/English"
import { Languagh_model } from "./Types/Languagh_model"

export type avaliable_lang = "Ar" | "En" 
type Languaghtype = {
    [key in avaliable_lang] : Languagh_model
}
export const Languagh  : Languaghtype = {
    "Ar" : Arbic ,
    "En" : English
}