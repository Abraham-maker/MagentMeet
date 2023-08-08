import React, { useEffect } from "react";
import {
  ContainerInput,
  FormLabel,
  FormInput,
  FormMessage,
  SelectedGender,
  FormButton,
  SelectedGenderContainer,
  Select,
  Option,
  PhoneContainer,
  PhoneContent,
  FormInputPhone,
  SelectPhone,
  CheckboxContainer,
  Checkbox,
} from "../index";
import { validateFormRegisterTwo } from "../ValidateAuth";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const StepTwo = ({
  handleOnChange,
  credential,
  errorRegister,
  setStep,
  setErrorRegister,
  setCredential,
  codePhone,
  setCodePhone,
}) => {
  const paises = useSelector((state) => state.auth.countris);

  useEffect(() => {
    const code = paises.find((state) => state.id == credential.country_id);
    setCodePhone(code?.phonecode ?? "");
  }, [credential.country_id]);

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.1, duration: 0.2 } },
  };

  const onChangeDate = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/\D/g, "");
    const formattedValue = numericValue.replace(
      /(\d{4})(\d{2})(\d{2})/,
      "$1-$2-$3"
    );

    setCredential((state) => ({
      ...state,
      birthdate: formattedValue,
    }));
  };

  const onChangePhone = (e) => {
    const value = e.target.value;

    setCredential((state) => ({
      ...state,
      phone: codePhone + value,
    }));
  };

  const handleStepTwo = () => {
    const isValid = validateFormRegisterTwo(
      credential.gender,
      credential.country_id,
      credential.phone,
      credential.birthdate,
      credential.terms,
      codePhone,
      setErrorRegister
    );

    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };
  return (
    <>
      {" "}
      <FormLabel
        style={{ display: "flex", alignSelf: "flex-start", marginTop: "20px" }}
      >
        Sexo:
      </FormLabel>
      <SelectedGender>
        <SelectedGenderContainer
          border={credential.gender === "male" ? "#1987cd" : "#fff"}
          onClick={() => {
            setErrorRegister((state) => ({ ...state, errorGender: "" }));
            setCredential((state) => ({
              ...state,
              gender: "male",
            }));
          }}
        >
          <img src="assets/svg/male.svg" alt="" />
        </SelectedGenderContainer>
        <SelectedGenderContainer
          border={credential.gender === "female" ? "#e83e8c" : "#fff"}
          onClick={() => {
            setErrorRegister((state) => ({ ...state, errorGender: "" }));
            setCredential((state) => ({
              ...state,
              gender: "female",
            }));
          }}
        >
          <img src="assets/svg/female.svg" alt="" />
        </SelectedGenderContainer>
      </SelectedGender>
      {errorRegister.errorGender !== "" ? (
        <FormMessage
          style={{
            display: "flex",
            alignSelf: "flex-start",
            marginTop: "20px",
          }}
          $error
          as={motion.div}
          variants={messageVariants}
          initial="hidden"
          animate="animate"
        >
          {errorRegister.errorGender}
        </FormMessage>
      ) : (
        false
      )}
      <FormLabel
        style={{ display: "flex", alignSelf: "flex-start", marginTop: "30px" }}
      >
        País:
      </FormLabel>
      <Select
        width="100%"
        border={
          errorRegister.errorCountry !== "" ? "rgb(255, 51, 51)" : "#cfcfcf"
        }
        onChange={(e) => {
          handleOnChange(e);
          setErrorRegister((state) => ({ ...state, errorCountry: "" }));
        }}
        name="country_id"
        value={credential.country_id}
      >
        <Option value="">Seleccione su país</Option>
        {paises.map(({ id, name }) => {
          return (
            <Option value={id} key={id}>
              {name}
            </Option>
          );
        })}
      </Select>
      {errorRegister.errorCountry !== "" ? (
        <FormMessage
          style={{
            display: "flex",
            alignSelf: "flex-start",
            marginTop: "20px",
          }}
          $error
          as={motion.div}
          variants={messageVariants}
          initial="hidden"
          animate="animate"
        >
          {errorRegister.errorCountry}
        </FormMessage>
      ) : (
        false
      )}
      <FormLabel
        style={{ display: "flex", alignSelf: "flex-start", marginTop: "30px" }}
      >
        Telefono:
      </FormLabel>
      <PhoneContainer>
        <PhoneContent>
          {" "}
          <SelectPhone
            disabled
            width="20%"
            border={
              errorRegister.errorPhone !== "" ? "rgb(255, 51, 51)" : "#cfcfcf"
            }
          >
            <Option>{codePhone !== "" ? `+${codePhone}` : ""}</Option>
          </SelectPhone>
          <FormInputPhone
            onFocus={() => {
              setErrorRegister((state) => ({ ...state, errorPhone: "" }));
            }}
            type="text"
            maxLength={13}
            onChange={onChangePhone}
            border={
              errorRegister.errorPhone !== "" ? "rgb(255, 51, 51)" : "#cfcfcf"
            }
            name={"name"}
            defaultValue={credential.phone}
          />
        </PhoneContent>
      </PhoneContainer>
      {errorRegister.errorPhone !== "" ? (
        <FormMessage
          style={{
            display: "flex",
            alignSelf: "flex-start",
            marginTop: "20px",
          }}
          $error
          as={motion.div}
          variants={messageVariants}
          initial="hidden"
          animate="animate"
        >
          {errorRegister.errorPhone}
        </FormMessage>
      ) : (
        false
      )}
      <ContainerInput>
        <FormLabel>Fecha de nacimiento:</FormLabel>
        <FormInput
          maxLength={8}
          placeholder="AAAA-DD-MM"
          onChange={onChangeDate}
          onFocus={() => {
            setErrorRegister((state) => ({ ...state, errorBirthdate: "" }));
          }}
          type={"text"}
          name={"name"}
          border={
            errorRegister.errorBirthdate !== "" ? "rgb(255, 51, 51)" : "#cfcfcf"
          }
          value={credential.birthdate}
        />
        {errorRegister.errorBirthdate !== "" ? (
          <FormMessage
            style={{
              display: "flex",
              alignSelf: "flex-start",
            }}
            $error
            as={motion.div}
            variants={messageVariants}
            initial="hidden"
            animate="animate"
          >
            {errorRegister.errorBirthdate}
          </FormMessage>
        ) : (
          false
        )}
      </ContainerInput>
      <CheckboxContainer>
        <Checkbox
          defaultChecked={credential.terms}
          onClick={() => {
            setErrorRegister((state) => ({ ...state, errorTerms: "" }));
            setCredential((state) => ({
              ...state,
              terms: !credential.terms,
            }));
          }}
        />{" "}
        Acepta los terminos y condiciones
      </CheckboxContainer>
      {errorRegister.errorTerms !== "" ? (
        <FormMessage
          style={{
            display: "flex",
            alignSelf: "flex-start",
          }}
          $error
          as={motion.div}
          variants={messageVariants}
          initial="hidden"
          animate="animate"
        >
          {errorRegister.errorTerms}
        </FormMessage>
      ) : (
        false
      )}
      <FormButton
        onClick={handleStepTwo}
        margintop="20px"
        border={"#4bafe1"}
        color={"#fff"}
        height="45px"
        width="100%"
        fontSize="16px"
      >
        <span>Continuar</span>
      </FormButton>
    </>
  );
};

export default StepTwo;
