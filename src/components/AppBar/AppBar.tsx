import { FC } from "react";
import { Logo } from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../redux/hooks";
import style from "./AppBar.module.css";
import Box from "@mui/material/Box";
import { Toaster } from "react-hot-toast";

export const AppBar: FC = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Toaster />
      <NavLink to="/" className={style.navLink}>
        <Logo />
      </NavLink>
      <Box gap="20px" display="flex">
        <NavLink to="/news" className={style.navLink}>
          News
        </NavLink>
        {isLoggedIn ? (
          <NavLink to="/profile" className={style.navLink}>
            Profile
          </NavLink>
        ) : (
          <NavLink to="/login" className={style.navLink}>
            Login
          </NavLink>
        )}
      </Box>
    </>
  );
};
