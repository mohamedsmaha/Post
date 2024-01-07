const initial = "http://localhost:3000/api"
export const API_URL : API_URL= {
    "Posts" : {
        "GET_Posts" : `${initial}/Posts`
    }
}
type API_URL = {
    "Posts" : {
        "GET_Posts" : string
    }
}
