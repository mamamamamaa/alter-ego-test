import { Outlet } from "react-router-dom";
import { FC, Suspense } from "react";
import { Box, Container } from "@mui/material";
import { AppBar } from "./AppBar/AppBar";
import { Footer } from "./Footer";

const containerStyles = {
  backgroundColor: "#efebeb",
  boxShadow: "10px 10px 44px -21px rgba(0, 0, 0, 0.75)",
};
const boxStyles = {
  p: "12px",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid #1976d2",
};

export const Layout: FC = () => {
  return (
    <Container sx={containerStyles}>
      <Box sx={boxStyles}>
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
