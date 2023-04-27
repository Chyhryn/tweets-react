import styled from "styled-components";
import { Button } from "../Global.styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 20px;
`;

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

export const Select = styled.select`
  width: 100px;
  padding: 4px 5px;
  border: none;
  border-radius: 10px;

  background: ${(p) => p.theme.colors.main};
  color: ${(p) => p.theme.colors.secondary};
  box-shadow: 0px 2px 2px -1px rgba(75, 42, 153, 0.75);

  transition: background ${(p) => p.theme.transitions.normal},
    color ${(p) => p.theme.transitions.normal};

  font-size: ${(p) => p.theme.fontSizes.s};

  &:hover,
  &:focus {
    outline: none;
    background: ${(p) => p.theme.colors.additional};
    color: ${(p) => p.theme.colors.accent};
  }
`;
