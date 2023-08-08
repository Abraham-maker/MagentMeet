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

export const validateFormRegisterOne = (
  email,
  password,
  password_confirmation,
  name,
  setErrorRegister
) => {
  let isValid = true;

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

export const validateFormRegisterTwo = (
  gender,
  country_id,
  phone,
  birthdate,
  terms,
  codePhone,
  setErrorRegister
) => {
  let isValid = true;
  if (gender.length === 0) {
    isValid = false;
    setErrorRegister((state) => ({
      ...state,
      errorGender: "El campo sexo es obligatorio",
    }));
  }

  if (country_id.length === 0) {
    isValid = false;
    setErrorRegister((state) => ({
      ...state,
      errorCountry: "Seleccione un País",
    }));
  }

  if (codePhone.length === 0 && phone.length === 0) {
    isValid = false;
    setErrorRegister((state) => ({
      ...state,
      errorPhone: "Campo obligatorio",
    }));
  } else if (phone.length === 0 && codePhone.length !== 0) {
    isValid = false;
    setErrorRegister((state) => ({
      ...state,
      errorPhone: "Complete este campo",
    }));
  } else if (phone.length !== 0 && codePhone.length === 0) {
    isValid = false;
    setErrorRegister((state) => ({
      ...state,
      errorPhone: "Seleccione un País",
    }));
  }

  if (terms !== true) {
    isValid = false;
    setErrorRegister((state) => ({
      ...state,
      errorTerms: "Debe aceptar los terminos para continuar",
    }));
  }

  const fechaActual = new Date();
  const dateArray = birthdate.split("-");
  const yearsBirthday = parseInt(dateArray[0]);
  const mouthBirthday = parseInt(dateArray[1]) - 1;
  const dayBirthday = parseInt(dateArray[2]);
  const date = new Date(yearsBirthday, mouthBirthday, dayBirthday);

  const age = fechaActual - date;
  const ageYears = Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));

  const esMayor = ageYears >= 18;
  if (!esMayor && birthdate.length > 0) {
    isValid = false;
    setErrorRegister((state) => ({
      ...state,
      errorBirthdate: "Debe ser mayor de edad para continuar",
    }));
  } else if (birthdate.length === 0) {
    isValid = false;
    setErrorRegister((state) => ({
      ...state,
      errorBirthdate: "Campo obligatorio",
    }));
  }

  return isValid;
};
