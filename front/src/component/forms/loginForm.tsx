import { Formik, Field, Form } from "formik";
import { ILoginRequest } from "../../shared/data/userData/userDataInterface";
import { loginRequestSchema } from "../../shared/data/userData/userDataSchema";
import { useContext } from "react";
import AppContext from "../AppContext";
import "./form.css"

export const LoginForm = () => {
  const { generalUseAuth } = useContext(AppContext);

  return generalUseAuth ? (
    <div>
      <p>{generalUseAuth.auth?.firstName}</p>
      <h1>Login</h1>
      <Formik
        initialValues={{
          currentEmail: "",
          currentPwd: "",
        }}
        onSubmit={async (values: ILoginRequest) => {
          if (await loginRequestSchema.isValid(values)) {
            generalUseAuth.handleLogin(values);
          }
        }}
      >
      <div className="form">
          <Form>
            <label htmlFor="email">Email </label>
            <Field
              className="emailF"
              id="currentEmail"
              name="currentEmail"
              placeholder="john@acme.com"
              type="email"
            />
            <label htmlFor="email" >Password </label>
            <Field
              align="center"
              id="currentPwd"
              name="currentPwd"
              placeholder="your password"
              type="password"
            />
            <button type="submit">Submit</button>
          </Form>
        </div>
      </Formik>
    </div>
  ) : null;
};
