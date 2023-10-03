import { configureStore } from '@reduxjs/toolkit'
import DefaultData from './UnFetched_data/Deafult_data/Default_data'
const store = configureStore({
    reducer: {
        DefaultData
    },
})
export default store
export type RootState   = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch