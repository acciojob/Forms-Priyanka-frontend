import React, { useState } from "react";
import Card from "./Card";

function FormState() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

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
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password_confirmation">
            Password Confirmation
          </label>
          <input
            id="password_confirmation"
            type="password"
            value={formData.passwordConfirmation}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default FormState;