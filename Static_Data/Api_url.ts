const initial = "http://localhost:3000/api"
export const API_URL : API_URL= {
    "Posts" : {
        "GET_Posts"   : () => {return `${initial}/Posts`} , 
        "Post_Action" : () => {return `${API_URL.Posts.GET_Posts()}/edit`}
    }
}
type API_URL = {
    "Posts" : {
        "GET_Posts"  : () => string ,
        "Post_Action": () => string,
    }
}
