import { TimeUnites } from "@/Ts/Time";
export type PostElementsLangType = {
    Likes:(likes :number) => string;
    Comments:(comments : number) => string
    Time:(duration : number , unite : TimeUnites) => string
}
export type Post_Lang = {
    PostObject : PostElementsLangType
}
