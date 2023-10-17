
import { createAsyncThunk, createSlice  } from "@reduxjs/toolkit"
import { UserRedux } from "./UserTypes"




const initialState : UserRedux = {
    loading : false ,
    error   : null  ,
    data    : []
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