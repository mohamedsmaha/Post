import { configureStore } from '@reduxjs/toolkit'
import DefaultData   from './UnFetched_data/Deafult_data/Default_data'
import Posts         from './Modules/Post/PostRedux'
import User          from './Modules/User/UserRedux'
import Notifications from './Modules/Notification/NotificationRedux'
const store = configureStore({
    reducer: {
        DefaultData,
        Posts,
        User,
        Notifications
    },
})
export default store
export type RootState   = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
