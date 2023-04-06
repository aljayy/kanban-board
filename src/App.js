import { useContext } from "react";
import classes from "./App.module.scss";
import Board from "./components/Board/Board";
import Header from "./components/Header/Header";
import ThemeCtx from "./context/themectx";

function App() {
  const { theme } = useContext(ThemeCtx);

  return (
    <div className={classes[theme]}>
      <Header />
      <Board />
    </div>
  );
}

export default App;
