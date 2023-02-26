import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LanguageIcon from "@mui/icons-material/Language";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../redux/hooks";
import { changeNewsLanguage } from "../../redux/news/newsSlice";

export const LanguageChanger = () => {
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: "ua" | "en", close: Function) => {
    i18n.changeLanguage(language);
    dispatch(changeNewsLanguage(language));
    close();
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            <LanguageIcon />
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={() => changeLanguage("ua", popupState.close)}>
              {t("language.ua")}
            </MenuItem>
            <MenuItem onClick={() => changeLanguage("en", popupState.close)}>
              {t("language.en")}
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};
