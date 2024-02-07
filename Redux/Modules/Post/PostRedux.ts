"use"
import { PayloadAction,  createSlice  } from "@reduxjs/toolkit"
import {  PostRedux, PostShap } from "./PostTypes"
import {  Create_Post_Action, Delete_Post_Action, Select_Post_Action } from "./PostFetch"
import { Delete } from "@mui/icons-material"
const initialState : PostRedux= {
    loading        : {"Delete" : false , "Insert" : false , "Select" : true , "Update" : false}     ,
    error          : null     ,
    data           : []
}
const PostSlice = createSlice({
    name : "Posts" ,
    initialState     ,
    reducers : {
    }    ,
    extraReducers: builder => {
        builder.addCase(Select_Post_Action.pending, state =>{
            state.loading.Select = true
        }  ),
        builder.addCase(Select_Post_Action.rejected, state =>{
            state.loading.Select = false
            state.error   = "null"
        }  ),
        builder.addCase(Select_Post_Action.fulfilled, (state , action:PayloadAction<PostShap[]>) =>{
            state.loading.Select = false
            state.data    = action.payload
            state.error   = null
        }  ),
        builder.addCase(Create_Post_Action.pending  , state => {
            state.loading.Insert = true
        }) ,
        builder.addCase(Create_Post_Action.rejected , state => {
            state.loading.Insert = false
        }) ,
        builder.addCase(Create_Post_Action.fulfilled,(state , action:PayloadAction<PostShap>) => {
            state.loading.Insert = false
            state.data.unshift(action.payload)
        }),
        builder.addCase(Delete_Post_Action.fulfilled ,(state , action:PayloadAction<number>) => {
            let index = 0
            for(let i =0 ; i < state.data.length ; i++){
                if(state.data[i].main_post.id == action.payload){index = i ; break}
            }
            state.data.slice(index , 1)
        })

    }
})

export default PostSlice.reducer