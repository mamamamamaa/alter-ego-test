import { FC, useEffect } from "react";
import Box from "@mui/material/Box";
import { useAppDispatch, useAuth } from "../../redux/hooks";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { logout } from "../../redux/auth/authSlice";

export const UserCard: FC = () => {
  const dispatch = useAppDispatch();
  const { username } = useAuth();

  const handleLogout = () => dispatch(logout());

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        paddingTop={10}
        paddingBottom={10}
        gap={5}
      >
        <Typography variant="h2" color="gray">
          Welcome my friend -{" "}
          <Box component="span" color="#1976d2">
            {username}
          </Box>
        </Typography>
        <Button size="medium" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </>
  );
};
