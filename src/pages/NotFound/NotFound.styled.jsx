import styled from "styled-components";
import notFoundImg from "../../images/404-page.png";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 90vh;
  width: 100%;
  padding-bottom: 40px;
  border-radius: ${(p) => p.theme.radii.main};
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  background-image: url(${notFoundImg}), ${(p) => p.theme.colors.main};
  background-repeat: no-repeat;
  background-position: center -50px, center;
  background-size: contain;
  text-align: center;
`;

export const Text = styled.p`
  padding: 20px;
  color: ${(p) => p.theme.colors.secondary};
  font-size: ${(p) => p.theme.fontSizes.m};
  text-align: center;
`;
