import { FC } from "react";
import Box from "@mui/material/Box";
import { useAppDispatch, useAuth } from "../redux/hooks";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { logout } from "../redux/auth/authSlice";
import { useTranslation } from "react-i18next";

export const UserCard: FC = () => {
  const { username } = useAuth();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

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
          {t("profile.welcome")} -{" "}
          <Box component="span" color="#1976d2">
            {username}
          </Box>
        </Typography>
        <Button size="medium" onClick={handleLogout}>
          {t("profile.logout")}
        </Button>
      </Box>
    </>
  );
};
