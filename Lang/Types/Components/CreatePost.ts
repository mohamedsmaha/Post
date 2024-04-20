export type CreatePostElementsLangType = {
    Content_InputFiled:(name :string) => string;
    Voting_InputFiled:(name : string ) => string
}
export type CreatePost_Lang = {
    CreatePostObject : CreatePostElementsLangType
}