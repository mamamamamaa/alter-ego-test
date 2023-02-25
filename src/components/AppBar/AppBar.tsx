import { FC } from "react";
import { Logo } from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../redux/hooks";
import style from "./AppBar.module.css";
import Box from "@mui/material/Box";
import { Toaster } from "react-hot-toast";
import Link from "@mui/material/Link";

export const AppBar: FC = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Toaster />
      <Link component={NavLink} to="/" className={style.navLink}>
        <Logo />
      </Link>
      <Box gap="20px" display="flex">
        <Link component={NavLink} to="/news" className={style.navLink}>
          News
        </Link>
        {isLoggedIn ? (
          <Link component={NavLink} to="/profile" className={style.navLink}>
            Profile
          </Link>
        ) : (
          <Link component={NavLink} to="/login" className={style.navLink}>
            Login
          </Link>
        )}
      </Box>
    </>
  );
};
