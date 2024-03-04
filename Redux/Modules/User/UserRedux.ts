
import { PayloadAction, createAsyncThunk, createSlice  } from "@reduxjs/toolkit"
import { UserRedux, User_Login_Response, User_Type } from "./UserTypes"
import { Check_User_Login } from "./UserFetch"




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
        
    }
}



const UserSlice = createSlice({
    name : "MainUser" ,
    initialState     ,
    reducers : {
    }    ,
    extraReducers : bulider => {
        bulider.addCase(Check_User_Login.fulfilled , (state , action :PayloadAction<User_Login_Response> ) => {
            if(action.payload.Login == true){
                state.data = action.payload.data as User_Type
            }
        })
    }
})
export default UserSlice.reducer