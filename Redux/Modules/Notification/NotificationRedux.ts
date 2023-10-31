
import { createAsyncThunk, createSlice  } from "@reduxjs/toolkit"
import { NotificationRedux } from "./NotificationTypes"



const initialState : NotificationRedux = {
    loading : false ,
    error   : null  ,
    data    : [// initial data for testing
        {
            "id" : 1 ,
            "From" : {"Username" : "mohamed sabry" , "id" : 2 , "img" : "1.jpeg"} ,
            "To"   : {"Username" : "mohamed1" , "id" : 4  , "img" : ""},
            "Seen"    : false ,
            "Refused" : false ,
            "Accepted": false ,
            "Time"    : {"Unite" : 'Day' , "duration" : 5},
            "Type"    : "Friend_Request" 
        },
        {
            "id" : 2 ,
            "From" : {"Username" : "mohamed" , "id" : 4 , "img" : "1.jpeg"} ,
            "To"   : {"Username" : "Ahmed Ali" , "id" : 3  , "img" : "2.jpeg"},
            "Seen"    : false ,
            "Refused" : false ,
            "Accepted": false ,
            "Time"    : {"Unite" : 'Day' , "duration" : 5},
            "Type"    : "Friend_Request" 
        },
        {
            "id" : 3 ,
            "From" : {"Username" : "Mostafa Ali" , "id" : 5 , "img" : "3.jpeg"} ,
            "To"   : {"Username" : "mohamed1"    , "id" : 4  , "img" : "2.jpeg"},
            "Seen"    : false ,
            "Refused" : false ,
            "Accepted": false ,
            "Time"    : {"Unite" : 'Day' , "duration" : 5},
            "Type"    : "Friend_Request" 
        },        
        {
            "id" : 4 ,
            "From" : {"Username" : "mohamed" , "id" : 4 , "img" : "1.jpeg"} ,
            "To"   : {"Username" : "sara Ahmed" , "id" : 3  , "img" : "5.jpeg"},
            "Seen"    : false ,
            "Refused" : false ,
            "Accepted": true ,
            "Time"    : {"Unite" : 'Day' , "duration" : 5},
            "Type"    : "Friend_Request" 
        },
        
    ]
}
export const FetchNotification= createAsyncThunk("FetchNotifications" , async () => {
    const results = await fetch('')
    const data    = await results.json()
    return data
})


const NotificationSlice = createSlice({
    name : "Notifications" ,
    initialState     ,
    reducers : {
    }    ,
    extraReducers: builder => {
    }
})
export default NotificationSlice.reducer