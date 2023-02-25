import { ComponentType } from "react";
import { useAuth } from "../redux/hooks";
import { Navigate } from "react-router-dom";

interface Props {
  component: ComponentType;
  redirectTo: string;
}

export const RestrictedRoute = ({
  component: Component,
  redirectTo = "/",
}: Props) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
