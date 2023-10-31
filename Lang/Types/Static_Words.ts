import { Static_words_type } from "@/Static_Data/Static_words"
import { TimeUnites } from "@/Ts/Time"

export type StaticWordsElementsLangType = {
    sentence : Static_words_type ,
    Time:(duration : number , unite : TimeUnites) => string

}
export type StaticWords_lang = {
    StaticWordsObject : StaticWordsElementsLangType
}