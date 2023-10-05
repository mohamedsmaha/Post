
import { createSlice  } from "@reduxjs/toolkit"
import { PostRedux } from "./PostTypes"



const initialState : PostRedux= {
    loading : false ,
    error   : null  ,
    data    : []
}

const PostSlice = createSlice({
    name : "1" ,
    initialState     ,
    reducers : {
    }    ,
    extraReducers: builder => {
    }
})
export default PostSlice.reducer