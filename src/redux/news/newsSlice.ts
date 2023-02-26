import { createSlice } from "@reduxjs/toolkit";
import { Article, getNews, PAGE_SIZE } from "./operations";

interface IInitialState {
  error: string | undefined;
  isLoading: boolean;
  news: Article[] | [];
  currentPage: number;
  maxPage: number;
}

const initialState: IInitialState = {
  error: undefined,
  isLoading: false,
  news: [],
  currentPage: 1,
  maxPage: 0,
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
        const { articles, totalResults } = action.payload;
        state.news = [...state.news, ...articles];
        state.currentPage += 1;
        state.maxPage = Math.ceil(totalResults / PAGE_SIZE);
        state.isLoading = false;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const newsReducer = newsSlice.reducer;
export type NewsSliceState = ReturnType<typeof newsSlice.getInitialState>;
