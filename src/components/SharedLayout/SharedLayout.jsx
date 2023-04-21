import { Outlet } from "react-router-dom";
import { Container, Header } from "./SharedLayout.styled";
import { Navigation } from "../Navigation/Navigation";

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <Navigation />
        </Container>
      </Header>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
