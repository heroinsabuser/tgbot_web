import "./App.css";
import Header from "./assets/Header/Header";
import { useEffect } from "react";
import { useTelegram } from "./assets/hooks/useTelegram";
import { Route, Routes } from "react-router-dom";
import ProductList from "./assets/ProductList/ProductList";
import Form from "./assets/Form/Form";


function App() {
  const {tg} = useTelegram();
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <>
      <Header></Header>
      <Routes>
        <Route index element={<ProductList/>}/>
        <Route path="/form" element={<Form/>}/>
      </Routes>
    </>
  );
}

export default App;
