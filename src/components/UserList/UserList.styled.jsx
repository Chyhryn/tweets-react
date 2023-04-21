import styled from "styled-components";
import { Button } from "../Global.styled";
import { Link } from "react-router-dom";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  align-items: stretch;
  margin: 0 auto 20px;
  color: ${(p) => p.theme.colors.secondary};
`;

export const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 10px;
  padding: 5px 10px;
  text-decoration: none;

  border-radius: ${(p) => p.theme.radii.secondary};

  transition: background ${(p) => p.theme.transitions.normal},
    color ${(p) => p.theme.transitions.normal};

  background: ${(p) => p.theme.colors.main};

  color: ${(p) => p.theme.colors.secondary};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accent};
    background: ${(p) => p.theme.colors.additional};
  }
`;

export const LoadBtn = styled(Button)`
  display: block;
  margin: 0 auto;

  transition: background ${(p) => p.theme.transitions.normal},
    color ${(p) => p.theme.transitions.normal};

  background: ${(p) => p.theme.colors.main};

  color: ${(p) => p.theme.colors.secondary};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accent};
    background: ${(p) => p.theme.colors.additional};
  }
`;
