import { API_URL } from "@/Static_Data/Api_url"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { Post_Filter } from "./PostTypes"
import Body from "@/app/Body"



export const Fetch_Posts = createAsyncThunk('FetchPosts', async (filter?: Post_Filter) => {
    const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ filter }),
    };

    const results = await fetch(`${API_URL.Posts.GET_Posts}`, requestOptions);
    const data = await results.json();
    return data;
});
