import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import { keyframes, styled } from "styled-components";
import devices from "../styles/breakpoints";
import TB_Logo from "../assets/logo.svg";
import BarberBackground from "../assets/barbershop.jpg";
import { Link } from "react-router-dom";
import { emailValidation, passwordValidation } from "../utils/validations";
import Notifications from "./notifications/notifications";

interface FormInput {
  name: string;
  email: string;
  password: string;
}

export default function Register() {
  const { newAccount } = useAuth();
  const { register, handleSubmit } = useForm<FormInput>();
  const notifications = Notifications();

  const onFormSubmit: SubmitHandler<FormInput> = async (data) => {
    const { email, password, name } = data;
    const validateEmail = emailValidation(email);
    const validatePassword = passwordValidation(password);

    if (!validateEmail.status) {
      notifications.handleError(validateEmail.message);
      return;
    }

    if (!validatePassword.status) {
      notifications.handleError(validatePassword.message);
      return;
    }

    const requestRegister = await newAccount(email, name, password);

    if (requestRegister.success) {
      notifications.handleSuccess("Usuário cadastrado.");
    } else {
      notifications.handleError(requestRegister.error);
    }
  };

  return (
    <Background>
      <BackgroundWrapper>
        <Logo src={TB_Logo} />
        <Form onSubmit={handleSubmit(onFormSubmit)}>
          <FormInput
            type="text"
            placeholder="Nome"
            {...register("name", { required: true })}
          />
          <FormInput
            type="email"
            placeholder="E-mail"
            {...register("email", { required: true })}
          />
          <FormInput
            type="password"
            placeholder="Senha"
            {...register("password", { required: true })}
          />
          <SubmitButton type="submit">Cadastrar</SubmitButton>
        </Form>
        <LoginHandleDiv>
          <LoginLinkLabel>Já tem uma conta?</LoginLinkLabel>
          <LoginLink to="/login">Entre agora.</LoginLink>
        </LoginHandleDiv>
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

const LoginHandleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3px;
  font-size: 16px;
`;

const LoginLinkLabel = styled.span`
  color: white;
`;

const LoginLink = styled(Link)`
  color: white;
  font-weight: 600;

  transition: color 0.2s;

  &:hover {
    color: #1770c9;
  }
`;
