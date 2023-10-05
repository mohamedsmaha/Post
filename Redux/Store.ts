import { configureStore } from '@reduxjs/toolkit'
import DefaultData from './UnFetched_data/Deafult_data/Default_data'
import Posts       from './Modules/Post/PostRedux'
const store = configureStore({
    reducer: {
        DefaultData,
        Posts
    },
})
export default store
export type RootState   = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch