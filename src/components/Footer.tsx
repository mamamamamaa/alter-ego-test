import { FC } from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useTranslation } from "react-i18next";

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/mamamamamaa">
        Your News
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export const Footer: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h6" align="center" gutterBottom>
        {t("footer.beHappy")}
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        {t("footer.description")}
      </Typography>
      <Copyright />
    </>
  );
};
