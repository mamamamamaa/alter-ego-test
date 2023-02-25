import { FC } from "react";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Link from "@mui/material/Link";

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
  return (
    <>
      <Typography variant="h6" align="center" gutterBottom>
        Be happy
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Something here to give the footer a purpose!
      </Typography>
      <Copyright />
    </>
  );
};
