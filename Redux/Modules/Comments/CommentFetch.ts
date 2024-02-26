import { API_URL } from "@/Static_Data/Api_url";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Comments_Filter, Create_Comment } from "./CommentTypes";

export const Select_Comments_Action      = createAsyncThunk('Select_Comments_Action' , async (Date : Comments_Filter) => {
    const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ Date }),
    };

    const results = await fetch(`${API_URL.Helper_Function.Normal_Action("Comments" , "Select")}`, requestOptions);
    const data = await results.json();
    return data;
});

export const Create_Comment_Action       = createAsyncThunk('Create_Comment_Action' , async (Date : Create_Comment) => {
    const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ Date }),
    };

    const results = await fetch(`${API_URL.Helper_Function.Normal_Action("Comments" , "Create")}`, requestOptions);
    const data = await results.json();
    return data;
});