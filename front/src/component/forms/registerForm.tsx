import { Formik, Field, Form } from "formik";

import { usePostApi } from "../../hooks/rest-hook/usePostApi";
import { IRegistrationRequest } from "../../shared/data/userData/userDataInterface";
import { registrationRequestSchema } from "../../shared/data/userData/userDataSchema";
import "./form.css"
import { allRoute } from "../../shared/routesUrls";

export const RegisterForm = () => {
  const postApi = usePostApi();
  return (
    <div>
      <p> {postApi.response}</p>
      <p> {postApi.error}</p>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        onSubmit={async (values: IRegistrationRequest) => {
          if (await registrationRequestSchema.isValid(values)) {
            postApi.postReq({
              route: allRoute.userAccountRoute.register,
              body: values,
              customHeader: undefined,
            });
          }
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="John" />
          <br/>
          <br/>
          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />
          <br/>
          <br/>
          <label htmlFor="email">Password</label>
          <Field
            id="password"
            name="password"
            placeholder="your password"
            type="password"
          />
          <br/>
          <br/>
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
          />
          <br/>
          <br/>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
