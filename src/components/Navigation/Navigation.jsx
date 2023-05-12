import { useLocation } from "react-router-dom";
import { NavItem } from "./Navigation.styled";

export const Navigation = () => {
  const location = useLocation();
  return (
    <nav style={{ marginRight: "auto" }}>
      <NavItem to="/" state={{ from: location }}>
        Home
      </NavItem>
      <NavItem to="/tweets" state={{ from: location }}>
        Tweets
      </NavItem>
    </nav>
  );
};
