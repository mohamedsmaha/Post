
import { createAsyncThunk, createSlice  } from "@reduxjs/toolkit"
import { ProfileRedux, profile_data } from "./ProfileTypes"




const initialState : ProfileRedux= {
    loading : false ,
    error   : null  ,
    data    : {
        user : {
            "ApiToken"    : "12" ,
            "Email"       : "mohamedsabrymohamedahmed@gmail.com",
            "Phonenumber" : "01015556737" , 
            "Username"    : "mohamed sabry" ,
            "birthday"    : "30/10/2002" ,
            "colortheme"  : 1    ,
            "id"          : 4    ,
            "img"         : "2.jpeg"   ,
            "secound_img" : "1.jpeg"   , 
            "lang"        : "En" ,
            "password"    : "lol",
            "Status"      : "Married",
            "From"        : "Egypt"
        },

    } 
}
export const FetchProfile = createAsyncThunk("FetchProfile" , async () => {
    const  results = await fetch('')
    const  data    = await results.json()
    return data
})


const ProfileSlice = createSlice({
    name : "Profile" ,
    initialState     ,
    reducers : {
    }    ,
    extraReducers: builder => {
    }
})
export default ProfileSlice.reducer