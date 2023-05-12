import { Link } from "react-router-dom";
import styled from "styled-components";

export const Heading = styled.h1`
  margin-bottom: 10px;
  border-radius: 20px;
  box-shadow: 0px 2px 2px -1px rgba(75, 42, 153, 0.75);

  background: ${(p) => p.theme.colors.main};

  text-align: center;
  line-height: 2;
`;

export const Heading2 = styled.h2`
  margin-bottom: 10px;
`;

export const Heading3 = styled.h3`
  margin-bottom: 10px;
`;

export const Section = styled.section`
  padding 20px;
  border-radius: ${(p) => p.theme.radii.main};
  background: ${(p) => p.theme.colors.main};
`;

export const Pargaraph = styled.p`
  margin-bottom: 20px;
`;

export const InfoParagraph = styled.p`
  margin-bottom: 20px;
  padding 20px;

  border-radius: ${(p) => p.theme.radii.main};
  background: ${(p) => p.theme.colors.main};

  text-align: center;
`;

export const BasicList = styled.ul`
  padding-left: 18px;
  list-style: square;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;

  color: ${(p) => p.theme.colors.secondary};

  transition: color ${(p) => p.theme.transitions.normal};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accent};
  }
`;
