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

export const validateFormRegister = (
  email,
  password,
  password_confirmation,
  name,
  gender,
  setErrorRegister
) => {
  let isValid = true;

  if (gender.length === 0) {
    isValid = false;
    setErrorRegister((state) => ({ ...state, errorGender: "Campo requerido" }));
  }

  if (name.length === 0) {
    isValid = false;
    setErrorRegister((state) => ({ ...state, errorName: "Campo requerido" }));
  } else if (name.length < 3) {
    isValid = false;
    setErrorRegister((state) => ({
      ...state,
      errorName: "El min de caracteres es de 3",
    }));
  }

  if (email.length === 0) {
    isValid = false;
    setErrorRegister((state) => ({
      ...state,
      errorEmail: "Campo requerido",
    }));
  } else if (email.length < 3) {
    isValid = false;
    setErrorRegister((state) => ({
      ...state,
      errorEmail: "El min de caracteres es de 3",
    }));
  }

  if (!emailRegex.test(email) && email.length > 0) {
    isValid = false;
    setErrorRegister((state) => ({
      ...state,
      errorEmail: "Ingrese un email valido",
    }));
  }

  if (password.length === 0) {
    isValid = false;
    setErrorRegister((state) => ({
      ...state,
      errorPassword: "Campo requerido",
    }));
  } else if (password.length < 6) {
    isValid = false;
    setErrorRegister((state) => ({
      ...state,
      errorPassword: "El min de caracteres es de 6",
    }));
  }

  if (password_confirmation.length === 0) {
    isValid = false;
    setErrorRegister((state) => ({
      ...state,
      errorConfirmPassword: "Campo requerido",
    }));
  } else if (password_confirmation.length < 6) {
    isValid = false;
    setErrorRegister((state) => ({
      ...state,
      errorConfirmPassword: "El min de caracteres es de 6",
    }));
  }

  if (password.trim() !== password_confirmation.trim()) {
    isValid = false;
    setErrorRegister((state) => ({
      ...state,
      errorPassword: "Las contraseñas no coinciden",
    }));
  }

  return isValid;
};
