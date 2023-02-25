import { FC } from "react";
import { Logo } from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../redux/hooks";
import style from "./AppBar.module.css";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import * as React from "react";
import { Toaster } from "react-hot-toast";

export const AppBar: FC = () => {
  const { isLoggedIn, error } = useAuth();
  return (
    <>
      <Toaster />
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? style.ActiveNavLink : style.navLink
        }
      >
        <Logo />
      </NavLink>
      <Box gap="20px" display="flex">
        <NavLink
          to="/news"
          className={({ isActive }) =>
            isActive ? style.ActiveNavLink : style.navLink
          }
        >
          News
        </NavLink>
        {isLoggedIn ? (
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? style.ActiveNavLink : style.navLink
            }
          >
            Profile
          </NavLink>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? style.ActiveNavLink : style.navLink
            }
          >
            Login
          </NavLink>
        )}
      </Box>
    </>
  );
};
