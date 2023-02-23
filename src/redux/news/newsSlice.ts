import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  error: string | undefined;
  isLoading: boolean;
  news: [];
}

const initialState: IInitialState = {
  error: undefined,
  isLoading: false,
  news: [],
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const newsReducer = newsSlice.reducer;
