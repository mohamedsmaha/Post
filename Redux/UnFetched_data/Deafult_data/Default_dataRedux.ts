import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DefaultDataReduxType } from "./Default_data_type";
import { Check_User_Login } from "@/Redux/Modules/User/UserFetch";
import { User_Login_Response } from "@/Redux/Modules/User/UserTypes";


const initialState : DefaultDataReduxType = 
{
    ColorTheme : 1 ,
    Lang       : "En",
    Login      : false
}

const DefaultData = createSlice({
    name : "DefaultData" ,
    initialState ,
    reducers:{
        Login_change:(state , action )=>{
            state.Login = action.payload
        }
    },
    extraReducers : bulider => {
        bulider.addCase(Check_User_Login.fulfilled , (state , action :PayloadAction<User_Login_Response> ) => {
            if(action.payload.Login == true){
                state.Login = true
            }
        })
    }
})

export default DefaultData.reducer
export const {Login_change} = DefaultData.actions