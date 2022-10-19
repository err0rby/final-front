import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { serverUrl } from "../serverUrl";

const initialState = {
    category: [],
}

export const fetchCategory = createAsyncThunk('fetch/category', async(_, thunkAPI) => {
    try {
        const res = await fetch(`${serverUrl}/Category`)
        const data = await res.json()
        return data
    } catch(error) {
        thunkAPI.rejectWithValue(error)
    }
})

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchCategory.fulfilled, (state, action) => {
            state.category = action.payload
        })
    }
})

export default categorySlice.reducer