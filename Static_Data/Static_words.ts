import {  Translate_Object } from "@/Helpers/Translate"
import { StaticWordsElementsLangType } from "@/Lang/Types/Static_Words"

export type Static_words_keys = "App_name" | "App_slogan"
export type Static_words_type = {[key in Static_words_keys] : string}

export function Static_Words():Static_words_type{
    const StaticWordsObj =Translate_Object("StaticWords") as StaticWordsElementsLangType
    const Static_words : Static_words_type = {
        App_name    : StaticWordsObj.sentence.App_name ,
        App_slogan  : StaticWordsObj.sentence.App_slogan
    }
    return Static_words
}


