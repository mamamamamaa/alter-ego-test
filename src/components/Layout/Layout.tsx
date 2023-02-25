import { Outlet } from "react-router-dom";
import { FC, Suspense } from "react";
import { Box, Container } from "@mui/material";
import style from "./Layout.module.css";
import { AppBar } from "../AppBar/AppBar";
import * as React from "react";
import { Footer } from "../Footer/Footer";

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
        <Footer />
      </Box>
    </Container>
  );
};
