import { createSlice } from "@reduxjs/toolkit";
import { DefaultDataReduxType } from "./Default_data_type";
import { Cookie_model } from "@/Helpers/Cookies/Class";

const initialState : DefaultDataReduxType = 
{
    ColorTheme : 1 ,
    Lang       : "Ar",
    Login      : Cookie_model.login()
}

const DefaultData = createSlice({
    name : "DefaultData" ,
    initialState ,
    reducers:{
        Login_change:(state , action )=>{
            state.Login = action.payload
        }
    }
})

export default DefaultData.reducer
export const {Login_change} = DefaultData.actions