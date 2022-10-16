import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/input";
import { register } from "../utils/api";

function RegisterInput() {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    register({ name, email, password });
  };

  return (
    <div className="input-register">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={name} onChange={onNameChange} />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={onEmailChange} />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" autoComplete="current-password" value={password} onChange={onPasswordChange} />
      <button type="button" onClick={onSubmitEventHandler}>
        Register
      </button>
    </div>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
