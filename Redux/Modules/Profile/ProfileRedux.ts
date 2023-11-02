
import { createAsyncThunk, createSlice  } from "@reduxjs/toolkit"
import { ProfileRedux, profile_data } from "./ProfileTypes"




const initialState : ProfileRedux= {
    loading : false ,
    error   : null  ,
    data    : {
        user : {
            "ApiToken"    : 12 ,
            "Email"       : "mohamedsabrymohamedahmed@gmail.com",
            "Phonenumber" : 0o10121 , 
            "Username"    : "mohamed sabry" ,
            "birthday"    : "30/10/2002" ,
            "colortheme"  : 1    ,
            "id"          : 4    ,
            "img"         : "1.jpeg"   ,
            "secound_img" : "1.jpeg"   , 
            "lang"        : "En" ,
            "password"    : "lol"
        }
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