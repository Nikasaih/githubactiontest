// import { Formik, Field, Form } from "formik";
// import { ILoginRequest } from "../../shared/data/userData/userDataInterface";
// import { loginRequestSchema } from "../../shared/data/userData/userDataSchema";
// import { useContext } from "react";
// import AppContext from "../AppContext";
// import "./form.css"

// export const LoginForm = () => {
//   const { generalUseAuth } = useContext(AppContext);

//   return generalUseAuth ? (
//     <div>
//       <p>{generalUseAuth.auth?.firstName}</p>
//       <h1>Login</h1>
//       <Formik
//         initialValues={{
//           currentEmail: "",
//           currentPwd: "",
//         }}
//         onSubmit={async (values: ILoginRequest) => {
//           if (await loginRequestSchema.isValid(values)) {
//             generalUseAuth.handleLogin(values);
//           }
//         }}
//       >
//       <div className="form">
//           <Form>
//             <label htmlFor="email">Email </label>
//             <Field
//               className="emailF"
//               id="currentEmail"
//               name="currentEmail"
//               placeholder="john@acme.com"
//               type="email"
//             />
//             <label htmlFor="email" >Password </label>
//             <Field
//               align="center"
//               id="currentPwd"
//               name="currentPwd"
//               placeholder="your password"
//               type="password"
//             />
//             <button type="submit">Submit</button>
//           </Form>
//         </div>
//       </Formik>
//     </div>
//   ) : null;
// };
import React, { useState } from "react";
import "./loginForm.css";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission
  };

  const handleGoogleLogin = () => {
    // TODO: handle Google login
  };

  const handleFacebookLogin = () => {
    // TODO: handle Facebook login
  };

  return (
    <div className="login-container">
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit} className="login-form">
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
        <button type="submit">Se connecter</button>
      </form>
      <div className="login-separator">ou</div>
      <div className="login-buttons">
        <button onClick={handleGoogleLogin}>Se connecter avec Google</button>
        <button onClick={handleFacebookLogin}>Se connecter avec Facebook</button>
      </div>
    </div>
  );
}
