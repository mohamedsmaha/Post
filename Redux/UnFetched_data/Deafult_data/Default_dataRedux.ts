import { createSlice } from "@reduxjs/toolkit";
import { DefaultDataReduxType } from "./Default_data_type";


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
    }
})

export default DefaultData.reducer
export const {Login_change} = DefaultData.actions