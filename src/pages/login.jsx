import React from "react";
import FormContainer from "../components/Form/FormContainer";
import FormSignUp from "../components/Form/FormSignup";
import FormLogin from "../components/Form/FormLogin";
import Terminal from "../components/Form/Terminal";

function Form({ switchForm, setSwitchForm }) {
  const updateSwitchForm = () => {
    setSwitchForm(!switchForm);
  };
  return switchForm ? (
    <FormLogin changeForm={updateSwitchForm} />
  ) : (
    <FormSignUp changeForm={updateSwitchForm} />
  );
}

function login() {
  const [switchForm, setSwitchForm] = React.useState(true);
  return (
    <FormContainer>
      <section className="w-full h-screen flex flex-col align-top p-5  items-center ">
        <Terminal />
      </section>
      <Form switchForm={switchForm} setSwitchForm={setSwitchForm} />
    </FormContainer>
  );
}

export default login;
