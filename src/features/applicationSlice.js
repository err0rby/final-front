import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  loading: false,
  token: localStorage.getItem("token"),
  id: localStorage.getItem("id"),
  message: null,
};

export const signInThunk = createAsyncThunk(
  "signin",
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3030/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const token = await res.json();
      return token;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signInThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signInThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(signInThunk.fulfilled, (state, action) => {

        if (action.payload.message === undefined) {
          localStorage.setItem("token", action.payload.token);
          localStorage.setItem("id", action.payload.id);
        }
        
        state.loading = false;
        state.error = null;
        state.token = action.payload.token;
        state.id = action.payload.id;
        state.message = action.payload.message;
      });
  },
});

export default applicationSlice.reducer;
