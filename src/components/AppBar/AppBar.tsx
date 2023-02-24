import { FC } from "react";
import { Logo } from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../redux/hooks";

export const AppBar: FC = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <div>
        <NavLink to="/news">News</NavLink>
        {isLoggedIn ? (
          <NavLink to="/profile">Profile</NavLink>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </>
  );
};
