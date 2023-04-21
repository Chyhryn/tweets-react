import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Header = styled.header`
  width: 100%;
  margin-bottom: 10px;

  background: ${(p) => p.theme.colors.main};
  box-shadow: 0px 2px 2px -1px rgba(75, 42, 153, 0.75);
`;
