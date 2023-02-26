import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { NewsSliceState } from "./newsSlice";

const { REACT_APP_API_KEY } = process.env;
export const PAGE_SIZE = 30;

interface NewsResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  author: string | null;
  title: string;
  description: string;
  url: string;
  source: string;
  urlToImage: string | null;
  content: string;
  publishedAt: string;
}

export const getNews = createAsyncThunk<
  NewsResponse,
  undefined,
  { rejectValue: string }
>("news/news", async (_, thunkAPI) => {
  try {
    const { news } = thunkAPI.getState() as { news: NewsSliceState };

    const { maxPage, currentPage } = news as {
      maxPage: number;
      currentPage: number;
    };

    if (currentPage > 1 && currentPage > maxPage) {
      return thunkAPI.rejectWithValue("Have you seen all the news");
    }

    const res = await axios.get(
      `https://newsapi.org/v2/everything?q=ukraine&apiKey=${REACT_APP_API_KEY}&language=en&pageSize=${PAGE_SIZE}&page=${currentPage}`
    );

    return res.data;
  } catch (e) {
    if (e instanceof Error) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
});
