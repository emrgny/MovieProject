import React, { useState } from "react";
import { useFormik } from "formik";
import "../styles/AdminLogin.css";
import { UserLoginSchema } from "../schemas";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserLogin() {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async () => {
    const response = await axios.get(`http://localhost:3000/Users`);
    const matchedUser = response.data.find(
      (user) =>
        user.email === formik.values.email &&
        user.password === formik.values.password
    );

    if (matchedUser) {
      navigate("/Home");
    } else {
      setErrorMessage("Girilen bilgiler yanlış");
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: UserLoginSchema,
    onSubmit,
  });
  return (
    <div className="form-container">
      <div className="card">
        <h1>Üye Giriş</h1>
        <form onSubmit={formik.handleSubmit} className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Mailinizi Girin"
              className={formik.errors.email ? "input-error" : ""}
            />
            {formik.errors.email && (
              <p className="error">{formik.errors.email}</p>
            )}
          </div>
          <div className="form-group">
            <label>Şifre</label>
            <input
              id="password"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Şifrenizi Girin"
              className={formik.errors.password ? "input-error" : ""}
            />
            {formik.errors.password && (
              <p className="error">{formik.errors.password}</p>
            )}
          </div>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <div className="button-container">
            <button
              type="button"
              className="register-button"
              onClick={() => navigate("/UserRegister")}
            >
              Register
            </button>
            <button
              type="submit"
              className="submit-button"
              onClick={formik.handleSubmit}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserLogin;
