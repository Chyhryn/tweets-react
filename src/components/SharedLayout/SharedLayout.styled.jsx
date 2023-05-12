import styled from "styled-components";
import { CustomLink } from "../Global.styled";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
`;

export const CustomContainer = styled(Container)`
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

export const Header = styled.header`
  width: 100%;
  margin-bottom: 10px;

  background: ${(p) => p.theme.colors.main};
  box-shadow: 0px 2px 2px -1px rgba(75, 42, 153, 0.75);
`;

export const HeaderLink = styled(CustomLink)`
  padding: 10px 0;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;
