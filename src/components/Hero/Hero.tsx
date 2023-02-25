import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as React from "react";
import { FC } from "react";
import CssBaseline from "@mui/material/CssBaseline";

export const Hero: FC = () => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          pt: 8,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="#676666"
            gutterBottom
          >
            News
          </Typography>
          <Typography
            sx={{
              mb: 0,
            }}
            variant="h5"
            align="center"
            color="grey"
            paragraph
          >
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don&apos;t simply skip over it entirely.
          </Typography>
        </Container>
      </Box>
    </>
  );
};
