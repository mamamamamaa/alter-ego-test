import { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const HomePage: FC = () => {
  return (
    <>
      <Box sx={{ py: 10 }}>
        <Typography variant="h1" sx={{ textAlign: "center", color: "#676666" }}>
          Welcome to the news service Your News
        </Typography>
      </Box>
    </>
  );
};

export default HomePage;
