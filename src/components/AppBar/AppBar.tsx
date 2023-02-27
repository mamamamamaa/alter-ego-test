import { FC, useEffect } from "react";
import { Logo } from "../Logo";
import { NavLink } from "react-router-dom";
import { useAuth, useNews } from "../../redux/hooks";
import style from "./AppBar.module.css";
import Box from "@mui/material/Box";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { LanguageChanger } from "../LanguageChanger";

export const AppBar: FC = () => {
  const { isLoggedIn, error: authError } = useAuth();
  const { error: newsError } = useNews();
  const { t } = useTranslation();

  useEffect(() => {
    const error = authError || newsError;
    if (error) {
      toast.error(error);
    }
  }, [authError, authError]);

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
