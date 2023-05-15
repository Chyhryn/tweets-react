import styled from "styled-components";
import { Button, Heading2 } from "../../components/Global.styled";
import { CustomLink } from "../../components/Global.styled";
export const FormWrapper = styled.div`
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  background: ${(p) => p.theme.colors.main};
  border-radius: ${(p) => p.theme.radii.main};
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const Title = styled(Heading2)`
  text-align: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  margin-top: 4px;
  padding: 4px 8px;
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: ${(p) => p.theme.colors.secondary};
  color: ${(p) => p.theme.colors.black};
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);

  font-family: inherit;
  font-weight: inherit;
  font-size: ${(p) => p.theme.fontSizes.ss};
  line-height: 1.2;

  transition: background-color ${(p) => p.theme.transitions.normal},
    outline ${(p) => p.theme.transitions.normal};

  &:focus {
    outline: 1px solid ${(p) => p.theme.colors.accent};
    background-color: ${(p) => p.theme.colors.accent};
  }
`;

export const SubmitBtn = styled(Button)`
  margin: 0 auto;
  margin-bottom: 20px;
  background-color: ${(p) => p.theme.colors.secondary};
  transition: background-color ${(p) => p.theme.transitions.normal},
    color ${(p) => p.theme.transitions.normal};

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.accent};
    color: ${(p) => p.theme.colors.secondary};
`;

export const FormText = styled.p`
  text-align: center;
  font-size: 14px;
`;

export const FormLink = styled(CustomLink)`
  color: ${(p) => p.theme.colors.accent};
  text-decoration: underline;
  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.secondary};
  }
`;
