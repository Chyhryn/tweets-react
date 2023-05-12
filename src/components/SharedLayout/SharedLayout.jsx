import { Outlet } from "react-router-dom";
import {
  Container,
  CustomContainer,
  Header,
  HeaderLink,
} from "./SharedLayout.styled";
import { Navigation } from "../Navigation/Navigation";

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <CustomContainer>
          <Navigation />
          <HeaderLink to="/login">Login</HeaderLink>
          <HeaderLink to="/registration">Registration</HeaderLink>
        </CustomContainer>
      </Header>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
