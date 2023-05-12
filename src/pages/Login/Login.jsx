import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import { Form } from "../../components/Global.styled";
import {
  FormWrapper,
  Title,
  Label,
  Input,
  SubmitBtn,
  FormText,
  FormLink,
} from "./Login.styled";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const { password, email } = form.elements;

    const data = {
      password: password.value,
      email: email.value,
    };
    try {
      dispatch(loginUser(data));
    } catch (error) {
      throw new Error(error);
    }
    form.reset();
    navigate("/");
  };

  return (
    <FormWrapper onSubmit={onSubmitHandler}>
      <Title>Login</Title>
      <Form>
        <Label>
          Email
          <Input name="email" type="email" />
        </Label>
        <Label>
          Password
          <Input name="password" type="password" />
        </Label>
        <SubmitBtn type="submit">Submit</SubmitBtn>
      </Form>
      <FormText>
        Have no account? <FormLink to="/registration">Please register</FormLink>
      </FormText>
    </FormWrapper>
  );
};
