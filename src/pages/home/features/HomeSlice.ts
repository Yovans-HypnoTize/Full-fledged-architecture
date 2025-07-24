import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../../lib/axios/axios-interceptor";

export interface HomeState {
  value: unknown;
  error: unknown;
}

const initialState: HomeState = {
  value: 0,
  error: null,
};

export const loginApi = createAsyncThunk("home/login", async (_, thunkAPI) => {
  try {
    const response = await apiClient.get("1");
    return response.data;
  } catch (error) {
    const message = error || "data fetching failed";
    console.log(error);
    return thunkAPI.rejectWithValue(message);
  }
});

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = "Noooooo 😒😒";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginApi.pending, (state) => {
        state.error = null;
        console.log("from pending", state);
      })
      .addCase(loginApi.fulfilled, (state, action) => {
        state.error = null;
        state.value = action.payload;
        console.log("from fullfilled", state);
        console.log(action);
      })
      .addCase(loginApi.rejected, (state, action) => {
        state.error = action.payload;
        console.log("from rejected", state.error);
      });
  },
});

export const { increment } = homeSlice.actions;

export default homeSlice.reducer;
