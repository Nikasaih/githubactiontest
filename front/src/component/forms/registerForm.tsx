// import { Formik, Field, Form } from "formik";

// import { usePostApi } from "../../hooks/rest-hook/usePostApi";
// import { IRegistrationRequest } from "../../shared/data/userData/userDataInterface";
// import { registrationRequestSchema } from "../../shared/data/userData/userDataSchema";
// import "./form.css"
// import { allRoute } from "../../shared/routesUrls";

// export const RegisterForm = () => {
//   const postApi = usePostApi();
//   return (
//     <div>
//       <p> {postApi.response}</p>
//       <p> {postApi.error}</p>
//       <h1>Signup</h1>
//       <Formik
//         initialValues={{
//           firstName: "",
//           lastName: "",
//           email: "",
//           password: "",
//         }}
//         onSubmit={async (values: IRegistrationRequest) => {
//           if (await registrationRequestSchema.isValid(values)) {
//             postApi.postReq({
//               route: allRoute.userAccountRoute.register,
//               body: values,
//               customHeader: undefined,
//             });
//           }
//         }}
//       >
//       <div className="form1">
//         <Form>
//           <label htmlFor="firstName">First Name</label>
//           <Field id="firstName" name="firstName" placeholder="John" />

//           <label htmlFor="lastName">Last Name</label>
//           <Field id="lastName" name="lastName" placeholder="Doe" />

//           <label htmlFor="email">Password</label>
//           <Field
//             id="password"
//             name="password"
//             placeholder="your password"
//             type="password"
//           />

//           <label htmlFor="email">Email</label>
//           <Field
//             id="email"
//             name="email"
//             placeholder="john@acme.com"
//             type="email"
//           />

//           <button type="submit">Submit</button>
//         </Form>
//       </div>
//       </Formik>
//     </div>
//   );
// };

import React, { useState } from "react";
import "./registerForm.css"

export function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission
  };

  const handleGoogleRegister = () => {
    // TODO: handle Google registration
  };

  const handleFacebookRegister = () => {
    // TODO: handle Facebook registration
  };

  return (
    <div className="register-container">
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Nom</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Adresse email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button type="submit">S'inscrire</button>
      </form>
      <div className="register-separator">ou</div>
      <div className="register-buttons">
        <button onClick={handleGoogleRegister}>S'inscrire avec Google</button>
        <button onClick={handleFacebookRegister}>S'inscrire avec Facebook</button>
      </div>
    </div>
  );
}


