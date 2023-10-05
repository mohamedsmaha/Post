import { TimeUnites } from "@/Ts/Time";

export type Post_Lang = {
    Postcomponent : {
        Likes:(likes :number) => string;
        comments:(comments : number) => string
        Time:(duration : number , unite : TimeUnites) => string
    }
}