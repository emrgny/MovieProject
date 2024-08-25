import React, { useState } from "react";
import { useFormik } from "formik";
import "../styles/AdminLogin.css";
import { AdminLoginSchema } from "../schemas";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async () => {
    const response = await axios.get(`http://localhost:3000/Admins`);
    const matchedAdmin = response.data.find(
      (admin) =>
        admin.email === formik.values.email &&
        admin.password === formik.values.password
    );

    if (matchedAdmin) {
      navigate("/AdminHome");
    } else {
      setErrorMessage("Girilen bilgiler yanlış");
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: AdminLoginSchema,
    onSubmit,
  });

  return (
    <div className="form-container">
      <div className="card">
        <h1>Yönetici Giriş</h1>
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
          <button
            type="submit"
            className="submit-button"
            onClick={formik.handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
