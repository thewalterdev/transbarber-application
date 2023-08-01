import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import TB_Logo from "../assets/logo.svg";
import BarberBackground from "../assets/barbershop.jpg";
import devices from "../styles/breakpoints";
import { emailValidation } from "../utils/validations";
import Notifications from "./notifications/notifications";

interface FormInput {
  email: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit } = useForm<FormInput>();
  const { login } = useAuth();
  const navigate = useNavigate();
  const notifications = Notifications();

  const onFormSubmit: SubmitHandler<FormInput> = async (data) => {
    const { email, password } = data;

    const validateEmail = emailValidation(email);

    if (validateEmail.status === true) {
      const requestAuth = await login(email, password);

      if (requestAuth.logged) {
        notifications.handleSuccess("Logado com sucesso.");
        navigate("/");
      } else {
        notifications.handleError(requestAuth.error);
      }
    } else {
      notifications.handleError(validateEmail.message);
    }
  };

  return (
    <Background>
      <BackgroundWrapper>
        <Logo src={TB_Logo} />
        <Form onSubmit={handleSubmit(onFormSubmit)}>
          <FormInput
            type="email"
            placeholder="Insira seu e-mail"
            {...register("email", { required: true })}
          />
          <FormInput
            type="password"
            placeholder="Insira sua senha"
            {...register("password", { required: true })}
          />
          <SubmitButton type="submit">Log in</SubmitButton>
        </Form>
        <RegisterHandleDiv>
          <RegisterLinkLabel>Não tem uma conta?</RegisterLinkLabel>
          <RegisterLink to="/registro">Crie uma agora.</RegisterLink>
        </RegisterHandleDiv>
      </BackgroundWrapper>
    </Background>
  );
}

const logoEntering = keyframes`
  0% {
    bottom: 100%;
  }

  100% {
    bottom: 0;
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${BarberBackground});
  background-size: cover;
  background-position: center;
`;

const BackgroundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  row-gap: 8px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  row-gap: 10px;
  padding: 0 15px;

  @media (min-width: ${devices.tablet}) {
    width: 420px;
  }
`;

const FormInput = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  padding: 0 10px;
  font-size: 16px;
  background: none;
  border: none;
  border-bottom: 1px solid transparent;
  transition: border 0.2s;
  color: white;

  &:focus {
    border-bottom: 1px solid white;
  }
`;

const SubmitButton = styled.button`
  border: none;
  height: 35px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  background: #1770c9;
  color: white;
  font-weight: 600;
  transition: background 0.2s;

  @media (min-width: ${devices.tablet}) {
    width: 420px;
  }

  &:hover {
    background: none;
    border: 2px solid #1770c9;
  }
`;

const Logo = styled.img`
  position: relative;
  width: 100%;
  height: 200px;

  animation: ${logoEntering} 1.5s ease-out;

  @media (min-width: ${devices.tablet}) {
    height: 420px;
  }
`;

const RegisterHandleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3px;
  font-size: 16px;
`;

const RegisterLinkLabel = styled.span`
  color: white;
`;

const RegisterLink = styled(Link)`
  color: white;
  font-weight: 600;

  transition: color 0.2s;

  &:hover {
    color: #1770c9;
  }
`;
