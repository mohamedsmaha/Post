const initial = "http://localhost:3000/api"
export const API_URL : API_URL= {
    "Posts" : {
        "Select"           : () => {return `${initial}/Posts`} , 
        "Create"           : () => {return `${API_URL.Posts.Select()}/Create`} ,
        "Update"           : () => {return `${API_URL.Posts.Select()}/Update`} ,
        "Delete"           : () => {return `${API_URL.Posts.Select()}/Delete`}
    }
}
type API_URL = {
    "Posts" : {
        "Select"     : () => string ,
        "Create"     : () => string ,
        "Update"     : () => string ,
        "Delete"     : () => string
    }
}
