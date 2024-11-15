import * as Yup from "yup";

export const LoginSchema = Yup.object({
  email: Yup.string().required("Please enter your email"),
  password: Yup.string().min(2).max(15).required("Please enter your password"),
});
