import { ComponentType, FC } from "react";
import { useAuth } from "../redux/hooks";
import { Navigate } from "react-router-dom";

interface Props {
  component: ComponentType;
  redirectTo: string;
}

export const RestrictedRoute: FC<Props> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
