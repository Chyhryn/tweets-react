import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  padding: 10px 20px;
`;

export const NavItem = styled(NavLink)`
  color: ${(p) => p.theme.colors.secondary};
  text-decoration: none;

  transition: color ${(p) => p.theme.transitions.normal};

  &:not(:last-child) {
    margin-right: 16px;
  }

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accent};
  }

  &.active {
    color: ${(p) => p.theme.colors.accent};
  }
`;
