import { TimeUnites } from "@/Ts/Time";
export type PostElementsLangType = {
    Likes:(likes :number) => string;
    Comments:(comments : number) => string
}
export type Post_Lang = {
    PostObject : PostElementsLangType
}
