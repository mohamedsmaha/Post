
import { createAsyncThunk, createSlice  } from "@reduxjs/toolkit"
import { PostRedux } from "./PostTypes"



const initialState : PostRedux= {
    loading : false ,
    error   : null  ,
    data    : []
}
export const FetchPosts= createAsyncThunk("FetchPosts" , async () => {
    const results = await fetch('')
    const data    = await results.json()
    return data
})


const PostSlice = createSlice({
    name : "Posts" ,
    initialState     ,
    reducers : {
    }    ,
    extraReducers: builder => {
    }
})
export default PostSlice.reducer