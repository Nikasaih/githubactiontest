import { Formik, Field, Form } from "formik";
import { ILoginRequest } from "../../shared/data/userData/userDataInterface";
import { loginRequestSchema } from "../../shared/data/userData/userDataSchema";
import { useContext } from "react";
import AppContext from "../AppContext";
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
        <Form>
          <label htmlFor="email">Email</label>
          <Field
            id="currentEmail"
            name="currentEmail"
            placeholder="john@acme.com"
            type="email"
          />
          <label htmlFor="email">Password</label>
          <Field
            id="currentPwd"
            name="currentPwd"
            placeholder="your password"
            type="password"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  ) : null;
};
