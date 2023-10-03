export type Post_Lang = {
    Postcomponent : {
        Likes:(likes :number) => string;
        comments:(comments : number) => string
        Time:(duration : number , unite : string) => string
    }
}