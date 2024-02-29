"use"
import { PayloadAction,  createSlice  } from "@reduxjs/toolkit"
import {  PostRedux, PostShap } from "./PostTypes"
import {  Create_Post_Action, Delete_Post_Action, Select_Post_Action, Update_Post_Action } from "./PostFetch"
import { Delete, Update } from "@mui/icons-material"
import build from "next/dist/build"
import { CommentRedux, Create_Comment_Api_Response, Delete_Comment_APi_Response, Select_Comments_Api_Response } from "../Comments/CommentTypes"
import { Create_Comment_Action, Delete_Comment_Action, Select_Comments_Action } from "../Comments/CommentFetch"
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
        // For Comments Component
            // Select
                builder.addCase(Select_Comments_Action.fulfilled , (state , action:PayloadAction<Select_Comments_Api_Response>) => {
                    if(action.payload.type == "Post"){
                        for(let i =0 ; i < state.data.length ; i++){
                            if(state.data[i].main_post.id == action.payload.Search_Id){
                                state.data[i].Comments.data= action.payload.Date
                                break
                            }
                        }
                    }
                }), 
            // Create
                builder.addCase(Create_Comment_Action.fulfilled , ( state , action:PayloadAction<Create_Comment_Api_Response> ) => {
                    if(action.payload.type == "Post"){
                        for(let i=0 ; i < state.data.length ; i++){
                            if(state.data[i].main_post.id == action.payload.Data.Search_ID){
                                state.data[i]['Comments']['data'].push(action.payload.Data)
                                break
                            }
                        }
                    }
                }) 
            // Delete
                builder.addCase(Delete_Comment_Action.fulfilled , ( state , action:PayloadAction<Delete_Comment_APi_Response> ) => {
                    if(action.payload.type == "Post"){
                        let index  = state.data.findIndex(item => item.main_post.id == action.payload.Search_Id)
                        let index2 = state.data[index].Comments.data.findIndex(item => item.id)
                        let shortcut = state.data[index].Comments.data
                        const newData = [...shortcut.slice(0, index2), ...shortcut.slice(index + 1)];
                        state.data[index].Comments.data = newData; 
                    }
                }) 
        // For Post Component
            // Select
                builder.addCase(Select_Post_Action.pending, state =>{
                    state.loading.Select = true
                    state.data = []
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
            // Create
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
            // Delete
                builder.addCase(Delete_Post_Action.fulfilled, (state, action: PayloadAction<number>) => {
                    const index = state.data.findIndex(item => item.main_post.id === action.payload);
                    if (index !== -1) {
                        const newData = [...state.data.slice(0, index), ...state.data.slice(index + 1)];
                        state.data = newData; 
                    }
                });
            // Update
                builder.addCase(Update_Post_Action.rejected , (state) => {})
                builder.addCase(Update_Post_Action.pending  , (state) => {})
                builder.addCase(Update_Post_Action.fulfilled, (state , action: PayloadAction<PostShap> ) => {})

    }
})


export default PostSlice.reducer