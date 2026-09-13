import React, { useRef } from "react";
import Card from "./Card";

function FormRef() {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      fullName: fullNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      passwordConfirmation:
        passwordConfirmationRef.current.value,
    };

    console.log(formData);
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="full_name">Full Name</label>
          <input
            id="full_name"
            type="text"
            ref={fullNameRef}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            ref={emailRef}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            ref={passwordRef}
          />
        </div>

        <div>
          <label htmlFor="password_confirmation">
            Password Confirmation
          </label>
          <input
            id="password_confirmation"
            type="password"
            ref={passwordConfirmationRef}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default FormRef;