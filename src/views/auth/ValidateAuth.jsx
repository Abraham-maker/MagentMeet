import { emailRegex } from "../../environment/constans";

export const validateFormLogin = (email, password, setErrorAuth) => {
  let isValid = true;

  if (email.length === 0) {
    isValid = false;
    setErrorAuth((prevState) => ({
      ...prevState,
      emailError: "Campo requerido",
    }));
  } else if (email.length < 3) {
    isValid = false;
    setErrorAuth((prevState) => ({
      ...prevState,
      emailError: "El min de caracteres es de 3",
    }));
  }

  if (!emailRegex.test(email) && email.length > 0) {
    isValid = false;
    setErrorAuth((prevState) => ({
      ...prevState,
      emailError: "Ingrese un email valido",
    }));
  }

  if (password.length === 0) {
    isValid = false;
    setErrorAuth((prevState) => ({
      ...prevState,
      passwordError: "Campo requerido",
    }));
  } else if (password.length < 6) {
    isValid = false;
    setErrorAuth((prevState) => ({
      ...prevState,
      passwordError: "El min de caracteres es de 6",
    }));
  }

  return isValid;
};
