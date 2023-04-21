import styled from "styled-components";
import { Button } from "../../Global.styled";

export const FollowBtn = styled(Button)`
  background-color: ${(p) => p.theme.colors.secondary};
  transition: background-color ${(p) => p.theme.transitions.normal};

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.accent};
  }
`;

export const FollowingBtn = styled(FollowBtn)`
  background-color: ${(p) => p.theme.colors.accent};

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.secondary};
  }
`;
