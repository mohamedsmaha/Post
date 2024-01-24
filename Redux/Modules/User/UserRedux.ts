
import { createAsyncThunk, createSlice  } from "@reduxjs/toolkit"
import { UserRedux } from "./UserTypes"




const initialState : UserRedux = {
    loading : false ,
    error   : null  ,
    data    : { // initial data for testing
        "ApiToken"    : "12" ,
        "Email"       : "mohamedsabrymohamedahmed@gmail.com",
        "Phonenumber" : "01015556737" , 
        "Username"    : "Mohamed" ,
        "birthday"    : "30/10/2002" ,
        "colortheme"  : 1    ,
        "id"          : 4    ,
        "img"         : "mohamed.jpg"   ,
        "secound_img" : ""   , 
        "lang"        : "En" ,
        "password"    : "lol",
        
    }
}
export const FetchUser = createAsyncThunk("FetchUser" , async () => {
    const results = await fetch('')
    const data    = await results.json()
    return data
})


const UserSlice = createSlice({
    name : "MainUser" ,
    initialState     ,
    reducers : {
    }    ,
    extraReducers: builder => {
    }
})
export default UserSlice.reducer