import "./App.css";
import { PageManager } from "./page/pageManager";
import { Header } from "./component/header/Header";
import Site from "../src/Containers/Site/Site";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./component/UI/NavBar/NavBar";
import Search from "./component/search/Search";
import Footer from "./component/UI/Footer/Footer";

function App() {
  return (
    <>
      {/* <Header />
      <PageManager />
      <Footer/> */}
      <div>
      {/* <BrowserRouter> */}
        <Site />
      {/* </BrowserRouter> */}
    </div>
    </>
  );
}

export default App;
