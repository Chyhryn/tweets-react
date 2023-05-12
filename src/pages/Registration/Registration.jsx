import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/operations";
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
} from "./Registration.styled";

export const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const { name, password, email } = form.elements;

    const newUser = {
      user: name.value,
      password: password.value,
      email: email.value,
    };
    try {
      dispatch(registerUser(newUser));
    } catch (error) {
      throw new Error(error);
    }
    form.reset();
    navigate("/");
  };

  return (
    <FormWrapper onSubmit={onSubmitHandler}>
      <Title>Registration</Title>
      <Form>
        <Label>
          Name
          <Input name="name" type="text" />
        </Label>
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
        Already have an account? <FormLink to="/login">Please login</FormLink>
      </FormText>
    </FormWrapper>
  );
};
