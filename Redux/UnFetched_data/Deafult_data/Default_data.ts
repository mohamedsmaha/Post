import { createSlice } from "@reduxjs/toolkit";
import { DefaultDataReduxType } from "./Default_data_type";

const initialState : DefaultDataReduxType = 
{
    ColorTheme : 1 ,
    Lang       : "En"
}

const DefaultData = createSlice({
    name : "DefaultData" ,
    initialState ,
    reducers:{}
})

export default DefaultData.reducer