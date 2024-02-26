import { API_URL } from "@/Static_Data/Api_url"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { Create_Post, Post_Filter } from "./PostTypes"



export const Select_Post_Action      = createAsyncThunk('Select_Post_Action' , async (Data?: Post_Filter) => {
    const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ Data }),
    };

    const results = await fetch(`${API_URL.Helper_Function.Normal_Action("Posts" , "Select")}`, requestOptions);
    const data = await results.json();
    return data;
});
export const Create_Post_Action      = createAsyncThunk('Create_Post_Action' , async (Data : Create_Post) => {
    const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ Data }),
    };
    const results = await fetch(`${API_URL.Helper_Function.Normal_Action("Posts" , "Create")}`, requestOptions);
    const data = await results.json();
    return data;
})
export const Update_Post_Action      = createAsyncThunk('Update_Post_Action' , async (Data : Create_Post) => {
    const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ Data }),
    };
    const results = await fetch(`${API_URL.Helper_Function.Normal_Action("Posts" , "Update")}`, requestOptions);
    const data = await results.json();
    return data;
})
export const Delete_Post_Action      = createAsyncThunk('Delete_Post_Action' , async (Data : Create_Post) => {
    const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ Data }),
    };
    const results = await fetch(`${API_URL.Helper_Function.Normal_Action("Posts" , "Delete")}`, requestOptions);
    const data = await results.json();
    return data;
})
