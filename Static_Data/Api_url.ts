const initial = "http://localhost:3000/api"
type Action   = "Select" | "Create" | "Update" | "Delete"  

export const API_URL : API_URL= {
    "Posts" : {
        "Main"             : () => {return `${initial}/Posts`},
    },
    "Comments" : {
        "Main"             : () => {return `${initial}/Comments`},
    },
    "Helper_Function" : {
        "Normal_Action" : (key , Action ) => {return `${API_URL[key].Main()}/${Action}`}
    }
}
type Date_Structure = {     
        "Main"       : () => string
    }
type Helper_Function = {
    Normal_Action : (Key : API_Sections , Action : Action) => string
}
type API_Sections = "Posts" | "Comments"
type API_URL = {
    "Posts"    : Date_Structure,
    "Comments" : Date_Structure,
    "Helper_Function" : Helper_Function 
}
