import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const { REACT_APP_API_KEY } = process.env;

interface NewsResponse {
  pagination: {
    limit: number;
    offset: number;
    count: number;
    total: number;
  };
  data: Article[];
}

export interface Article {
  author: string | null;
  title: string;
  description: string;
  url: string;
  source: string;
  image: string | null;
  category: string;
  language: string;
  country: string;
  published_at: Date;
}

export const getNews = createAsyncThunk<
  NewsResponse,
  number,
  { rejectValue: string }
>("news/news", async (page, thunkAPI) => {
  try {
    const res = await axios.get(
      `http://api.mediastack.com/v1/news?access_key=${REACT_APP_API_KEY}&offset=${page}`
    );
    return res.data;
  } catch (e) {
    if (e instanceof Error) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
});
