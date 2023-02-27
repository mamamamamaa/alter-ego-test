import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { NewsSliceState } from "./newsSlice";

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

    const { maxPage, currentPage, newsLanguage } = news as {
      maxPage: number;
      currentPage: number;
      newsLanguage: "en" | "ru";
    };

    if (currentPage > 1 && currentPage > maxPage) {
      return thunkAPI.rejectWithValue("Have you seen all the news");
    }

    const res = await axios.get(
      `https://alter-ego-back.onrender.com?&pageSize=${PAGE_SIZE}&page=${currentPage}&language=${newsLanguage}`
    );

    return res.data;
  } catch (e) {
    if (e instanceof Error) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
});
