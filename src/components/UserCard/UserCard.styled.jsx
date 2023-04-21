import styled from "styled-components";
import UserCardLogo from "../../images/user-card-logo.png";

export const CardImgThumb = styled.div`
  overflow: hidden;
  padding: 28px 36px 18px;
`;

export const CardImg = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const Card = styled.li`
  position: relative;
  padding-bottom: 36px;
  border-radius: ${(p) => p.theme.radii.main};
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  background-image: url(${UserCardLogo}), ${(p) => p.theme.colors.main};
  background-repeat: no-repeat;
  background-position: 20px 20px, center;
  text-align: center;
`;

export const CardLogo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Line = styled.div`
  position: relative;
  height: 8px;
  margin-bottom: 62px;
  background: ${(p) => p.theme.colors.secondary};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const AvatarThumb = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border: 8px solid ${(p) => p.theme.colors.secondary};
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const Avatar = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const List = styled.ul`
  margin-bottom: 26px;
`;

export const Item = styled.li`
  font-size: ${(p) => p.theme.fontSizes.m};
  text-transform: uppercase;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;
