import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cradt from "./pages/Home";
import { Requisicao } from "./pages/Home/requisicao/Requisicao";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cradt" element={<Cradt />}></Route>
        <Route path="/requisicao" element={<Requisicao />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
