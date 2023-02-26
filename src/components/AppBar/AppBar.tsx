import { FC } from "react";
import { Logo } from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../redux/hooks";
import style from "./AppBar.module.css";
import Box from "@mui/material/Box";
import * as React from "react";
import { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { LanguageChanger } from "../LanguageChanger/LanguageChanger";

export const AppBar: FC = () => {
  const { isLoggedIn, error } = useAuth();
  const { t } = useTranslation();
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
          {t("appBar.news")}
        </NavLink>
        {isLoggedIn ? (
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? style.ActiveNavLink : style.navLink
            }
          >
            {t("appBar.profile")}
          </NavLink>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? style.ActiveNavLink : style.navLink
            }
          >
            {t("appBar.login")}
          </NavLink>
        )}
        <LanguageChanger />
      </Box>
    </>
  );
};
