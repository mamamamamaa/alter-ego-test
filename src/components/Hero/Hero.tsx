import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as React from "react";
import { FC } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { useTranslation } from "react-i18next";

export const Hero: FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <CssBaseline />
      <Box sx={{ pt: 8 }}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="#676666"
            gutterBottom
          >
            {t("news.hero.news")}
          </Typography>
          <Typography
            sx={{ mb: 0 }}
            variant="h5"
            align="center"
            color="grey"
            paragraph
          >
            {t("news.hero.description")}
          </Typography>
          {i18n.language === "ua" && (
            <Typography
              sx={{ mb: 0 }}
              variant="h5"
              align="center"
              color="grey"
              paragraph
            >
              (На жаль, сервіс News API не дає новини українською мовою, тому
              для зручності вони будуть російською мовою)
            </Typography>
          )}
        </Container>
      </Box>
    </>
  );
};
