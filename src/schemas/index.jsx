import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const AdminLoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Lütfen geçerli bir email giriniz.")
    .required("Email girmek zorunludur."),
  password: yup
    .string()
    .min(8, "LÜtfen minimum 8 karakter giriniz.")
    .matches(passwordRules, {
      message: "lütfen en az 1 büyük harf 1 küçük harf ve 1 sayı giriniz.",
    })
    .required("Şİfre girmek zorunludur."),
});

export const UserLoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Lütfen geçerli bir email giriniz.")
    .required("Email girmek zorunludur."),
  password: yup
    .string()
    .min(8, "LÜtfen minimum 8 karakter giriniz.")
    .matches(passwordRules, {
      message: "lütfen en az 1 büyük harf 1 küçük harf ve 1 sayı giriniz.",
    })
    .required("Şİfre girmek zorunludur."),
});

export const UserRegisterSchema = yup.object().shape({
  email: yup
    .string()
    .email("Lütfen geçerli bir email giriniz.")
    .required("Email girmek zorunludur."),
  password: yup
    .string()
    .min(8, "LÜtfen minimum 8 karakter giriniz.")
    .matches(passwordRules, {
      message: "lütfen en az 1 büyük harf 1 küçük harf ve 1 sayı giriniz.",
    })
    .required("Şİfre girmek zorunludur."),
});
