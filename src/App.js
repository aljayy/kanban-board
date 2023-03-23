import { useContext } from "react";
import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import ThemeCtx from "./context/themectx";

function App() {
  const { theme } = useContext(ThemeCtx);

  return (
    <div className={`${classes} ${classes[theme]}`}>
      <Header />
    </div>
  );
}

export default App;
