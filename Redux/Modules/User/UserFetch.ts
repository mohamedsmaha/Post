import { API_URL } from "@/Static_Data/Api_url"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { User_Login_Request } from "./UserTypes";




export const Check_User_Login  = createAsyncThunk('Check_User_Login' , async (Data:User_Login_Request) => {
    const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ Data }),
    };

    const results = await fetch(`${API_URL.User.Login}`, requestOptions);
    const data = await results.json();
    return data;
});