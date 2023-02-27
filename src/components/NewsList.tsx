import { FC, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { LoadingButton } from "@mui/lab";
import Container from "@mui/material/Container";
import { NewsCard } from "./NewsCard";
import { useAppDispatch, useNews } from "../redux/hooks";
import { getNews } from "../redux/news/operations";
import { useTranslation } from "react-i18next";

export const NewsList: FC = () => {
  const dispatch = useAppDispatch();
  const { news, isLoading } = useNews();
  const { t } = useTranslation();

  const handleLoadMore = () => dispatch(getNews());

  useEffect(() => {
    if (news.length === 0) {
      dispatch(getNews());
    }
  }, []);

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {news.length > 0 &&
          news.map((articleData, idx) => (
            <Grid item key={idx} xs={12} sm={6} md={4}>
              <NewsCard articleData={articleData} />
            </Grid>
          ))}
      </Grid>
      <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
        <LoadingButton
          loading={isLoading}
          loadingIndicator={t("news.loading")}
          variant="contained"
          onClick={handleLoadMore}
        >
          {t("news.fetch")}
        </LoadingButton>
      </Stack>
    </Container>
  );
};
