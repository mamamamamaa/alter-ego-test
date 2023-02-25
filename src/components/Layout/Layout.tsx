import { Outlet } from "react-router-dom";
import { FC, Suspense } from "react";
import { Box, Container } from "@mui/material";
import style from "./Layout.module.css";
import { AppBar } from "../AppBar/AppBar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Link from "@mui/material/Link";

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Your News
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export const Layout: FC = () => {
  return (
    <Container className={style.containerStyles}>
      <Box className={style.boxStyles}>
        <AppBar />
      </Box>
      <Box style={{ minHeight: "100vh", height: "100%" }}>
        <Suspense>
          <Outlet />
        </Suspense>
      </Box>
      <Box sx={{ p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
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
      </Box>
    </Container>
  );
};
