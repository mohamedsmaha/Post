
import { PayloadAction, createAsyncThunk, createSlice  } from "@reduxjs/toolkit"
import { ProfileRedux, profile_data } from "./ProfileTypes"
import { Check_User_Login } from "../User/UserFetch"
import { NormaL_User_Type, User_Login_Response } from "../User/UserTypes"




const initialState : ProfileRedux= {
    loading : false ,
    error   : null  ,
    data    : {
        User : {
            "Email"       : "mohamedsabrymohamedahmed@gmail.com",
            "Phonenumber" : "01015556737" , 
            "Username"    : "mohamed sabry" ,
            "birthday"    : "30/10/2002" ,
            "id"          : 1    ,
            "img"         : "2.jpeg"   ,
            "secound_img" : "1.jpeg"   , 
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
    extraReducers : bulider => {
        bulider.addCase(Check_User_Login.fulfilled , (state , action :PayloadAction<User_Login_Response> ) => {
            if(action.payload.Login == true){
                state.data.User = action.payload.data as NormaL_User_Type
            }
        })
    }
})
export default ProfileSlice.reducer