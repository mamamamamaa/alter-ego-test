import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAuth = () => {
  const isLoading = useAppSelector((store) => store.auth.isLoading);
  const error = useAppSelector((store) => store.auth.error);
  const isLoggedIn = useAppSelector((store) => store.auth.isLoggedIn);
  const username = useAppSelector((store) => store.auth.username);

  return { isLoading, error, isLoggedIn, username };
};

export const useNews = () => {
  const isLoading = useAppSelector((store) => store.news.isLoading);
  const error = useAppSelector((store) => store.news.error);
  const news = useAppSelector((store) => store.news.news);

  return { isLoading, error, news };
};
