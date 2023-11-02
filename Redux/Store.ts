import { configureStore } from '@reduxjs/toolkit'
import DefaultData   from './UnFetched_data/Deafult_data/Default_dataRedux'
import Posts         from './Modules/Post/PostRedux'
import User          from './Modules/User/UserRedux'
import Notifications from './Modules/Notification/NotificationRedux'
import Profile       from './Modules/Profile/ProfileRedux'   
const store = configureStore({
    reducer: {
        DefaultData,
        Posts,
        User,
        Notifications,
        Profile
    },
})
export default store
export type RootState   = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
