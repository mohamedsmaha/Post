
import { PayloadAction, createAsyncThunk, createSlice  } from "@reduxjs/toolkit"
import { PostData, PostRedux } from "./PostTypes"
import { Fetch_Posts } from "./PostFetch"



const initialState : PostRedux= {
    loading : true     ,
    error   : null     ,
    data    : []
}
// const userSlice = createSlice({
//     name : "Friends" ,
//     initialState     ,
//     reducers : {
//     }    ,
//     extraReducers: builder => {
//         builder.addCase(fetchposts.pending, state => {
//         state.loading = true
//         })
//         builder.addCase(
//         fetchposts.fulfilled,
//         (state, action: PayloadAction<PostType[]>) => {
//             state.loading = false
//             state.data = action.payload
//             state.error = ''
//         }
//         )
//         builder.addCase(fetchposts.rejected, (state, action) => {
//         state.loading = false
//         state.data    = []
//         state.error   = action.error.message || 'Something went wrong'
//         })

//     }
// })


const PostSlice = createSlice({
    name : "Posts" ,
    initialState     ,
    reducers : {
    }    ,
    extraReducers: builder => {
        builder.addCase(Fetch_Posts.pending, state =>{
            state.loading = true
        }  ),
        builder.addCase(Fetch_Posts.rejected, state =>{
            state.loading = false
            state.error   = "null"
        }  ),
        builder.addCase(Fetch_Posts.fulfilled, (state , action:PayloadAction<PostData[]>) =>{
            state.loading = false
            state.data    = action.payload
            state.error   = null
        }  )
    }
})
export default PostSlice.reducer