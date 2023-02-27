import { FC } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";

const titleStyles = {
  textAlign: "center",
  color: "#676666",
  position: "absolute",
  top: "50%",
  left: "50%",
  translate: "-50% 50%",
};

const NotFound: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box sx={{ height: "100%", position: "relative" }}>
        <Typography variant="h1" sx={titleStyles}>
          {t("notFound.title")}
        </Typography>
      </Box>
    </>
  );
};

export default NotFound;
