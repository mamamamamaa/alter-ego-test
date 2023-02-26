import { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

const HomePage: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box sx={{ py: 10 }}>
        <Typography variant="h1" sx={{ textAlign: "center", color: "#676666" }}>
          {t("home.banner")}
        </Typography>
      </Box>
    </>
  );
};

export default HomePage;
