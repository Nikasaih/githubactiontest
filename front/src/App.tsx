import "./App.css";
import { PageManager } from "./page/pageManager";
import { Header } from "./component/header/Header";
import Site from "../src/Containers/Site/Site";
import "./App.css"

function App() {
  return (
    <>
      {/* <Header />
      <PageManager />
      <Footer/> */}
      <div className="test">
          <Site />
      </div>
    </>
  );
}

export default App;
