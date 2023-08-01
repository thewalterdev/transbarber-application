export const emailValidation = (
  email: string
): { message: string; status: boolean } => {
  const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
  if (regEx.test(email)) {
    return { message: "E-mail válido", status: true };
  } else {
    return { message: "E-mail inválido", status: false };
  }
};

export const passwordValidation = (
  password: string
): { message: string; status: boolean } => {
  const hasNumbers = /\d/;
  const hasLetter = /[a-zA-Z]/;
  const length = password.length;

  if (hasNumbers.test(password)) {
    if (hasLetter.test(password)) {
      if (length >= 8) {
        return { message: "Senha válida.", status: true };
      } else {
        return {
          message: "A senha precisa ter mais de 8 caracteres.",
          status: false,
        };
      }
    } else {
      return { message: "A senha precisa ter letras.", status: false };
    }
  } else {
    return { message: "A senha precisa ter números.", status: false };
  }
};
