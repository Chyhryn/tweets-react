import styled from "styled-components";
import UserCardLogo from "../../images/user-card-logo.png";
import UserCardImage from "../../images/user-card-image.png";

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  padding: 214px 0 36px;
  width: 380px;
  height: 460px;
  border-radius: ${(p) => p.theme.radii.main};
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  background-image: url(${UserCardLogo}), url(${UserCardImage}),
    ${(p) => p.theme.colors.main};
  background-repeat: no-repeat;
  background-position: 20px 20px, 36px 28px, center;
  text-align: center;
`;

export const AvatarThumb = styled.div`
  position: absolute;
  top: 218px;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 8px solid ${(p) => p.theme.colors.secondary};
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Avatar = styled.img`
  width: 80px;
  object-fit: contain;
`;

export const List = styled.ul`
  width: 100%;
  margin-bottom: 26px;

  &::before {
    content: "";
    display: block;
    height: 8px;
    margin-bottom: 62px;
    background: ${(p) => p.theme.colors.secondary};
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const Item = styled.li`
  font-size: ${(p) => p.theme.fontSizes.m};
  text-transform: uppercase;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;
