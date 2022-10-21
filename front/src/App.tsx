import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useGetApi } from "./hooks/rest-hook/useGetApi";
import { allRoute } from "./shared/routesUrls";
import { usePostApi } from "./hooks/rest-hook/usePostApi";

function App() {
  const t = useGetApi({
    route: allRoute.testRouteRoot,
    customHeader: undefined,
  });
  const c = usePostApi();

  useEffect(() => {
    /* console.table(t);

    console.table(
      c.postReq({
        route: allRoute.testRouteRoot,
        customHeader: undefined,

        body: {
          jean: "miquel",
        },
      })
    );*/
  }, [c, t]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
