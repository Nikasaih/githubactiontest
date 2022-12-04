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
        <Form>
          <label className="email" htmlFor="email">Email </label>
          <Field
            className="emailF"
            id="currentEmail"
            name="currentEmail"
            placeholder="john@acme.com"
            type="email"
          />
          <br/>
          <br/>
          <label className="Password" htmlFor="email" >Password </label>
          <Field
            align="center"
            id="currentPwd"
            name="currentPwd"
            placeholder="your password"
            type="password"
          />
          <br/>
          <br/>
          <button type="submit">Submit</button>
          <br/>
          <br/>
        </Form>
      </Formik>
    </div>
  ) : null;
};
