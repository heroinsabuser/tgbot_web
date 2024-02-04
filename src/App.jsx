import "./App.css";
import Header from "./assets/Header/Header";
import { useEffect } from "react";
import { useTelegram } from "./assets/hooks/useTelegram";


function App() {
  const {tg, onToggleButton} = useTelegram();
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <>
      <Header></Header>
      <button onClick={onToggleButton}>toggle</button>
    </>
  );
}

export default App;
