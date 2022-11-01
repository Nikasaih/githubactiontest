import "./App.css";
import { RegisterForm } from "./component/forms/registerForm";
import { LoginForm } from "./component/forms/loginForm";

function App() {
  return (
    <div className="App">
      <RegisterForm />
      <LoginForm />
    </div>
  );
}

export default App;
