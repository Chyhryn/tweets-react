import styled from "styled-components";

export const Heading = styled.h1`
  margin-bottom: 10px;
  border-radius: 20px;
  box-shadow: 0px 2px 2px -1px rgba(75, 42, 153, 0.75);

  background: ${(p) => p.theme.colors.main};
  color: ${(p) => p.theme.colors.secondary};

  text-align: center;
  line-height: 2;
`;

export const Button = styled.button`
  width: 196px;
  padding: 14px 5px;
  border-radius: ${(p) => p.theme.radii.secondary};

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  color: ${(p) => p.theme.colors.black};

  font-weight: ${(p) => p.theme.fontWeights.secondary};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: 1.22;
  text-transform: uppercase;
`;

export const Paragraph = styled.p`
  margin-bottom: 20px;
  padding 20px;

  border-radius: ${(p) => p.theme.radii.main};
  background: ${(p) => p.theme.colors.main};
  color: ${(p) => p.theme.colors.secondary};

  text-align: center;
`;
