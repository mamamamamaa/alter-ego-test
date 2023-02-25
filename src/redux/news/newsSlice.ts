import { createSlice } from "@reduxjs/toolkit";
import { Article, getNews } from "./operations";

interface IInitialState {
  error: string | undefined;
  isLoading: boolean;
  news: Article[] | [];
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
  extraReducers: (builder) =>
    builder
      .addCase(getNews.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.news = action.payload.data;
        state.isLoading = false;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const newsReducer = newsSlice.reducer;
