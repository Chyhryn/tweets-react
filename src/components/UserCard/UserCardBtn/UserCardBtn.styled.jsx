import styled from "styled-components";
import { Button } from "../../Global.styled";

export const FollowBtn = styled(Button)`
  background-color: ${(p) => p.theme.colors.secondary};
  transition: scale ${(p) => p.theme.transitions.normal};

  &:hover,
  &:focus {
    scale: 1.05;
  }
`;

export const FollowingBtn = styled(FollowBtn)`
  background-color: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.secondary};
`;
