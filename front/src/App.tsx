import "./App.css";
<<<<<<< HEAD
import  Site  from "./Containers/Site/Site";
import {BrowserRouter} from "react-router-dom"

function App() {
  return (
    <div>
        <Site/>     
    </div>
=======
import { PageManager } from "./page/pageManager";
import { Header } from "./component/header/Header";
function App() {
  return (
    <>
      <Header />
      <PageManager />
      {/* todo Insert footer */}
    </>
>>>>>>> 0fcddb695e7715a66626f2831d53c0d895714415
  );
}

export default App;
