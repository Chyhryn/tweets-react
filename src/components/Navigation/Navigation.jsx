import { useLocation } from "react-router-dom";
import { NavItem, Nav } from "./Navigation.styled";

export const Navigation = () => {
  const location = useLocation();
  return (
    <Nav>
      <NavItem to="/" state={{ from: location }}>
        Home
      </NavItem>
      <NavItem to="/tweets" state={{ from: location }}>
        Tweets
      </NavItem>
    </Nav>
  );
};
