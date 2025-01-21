import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AbonoFaltas from "./pages/AbonoFaltas";
import Cradt from "./pages/Cradt";
import DetalhesProcesso from "./pages/atendimento";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AbonoFaltas" element={<AbonoFaltas />}></Route>
        <Route path="/cradt" element={<Cradt />}></Route>
        <Route path="/solicitacoes/:id" element={<DetalhesProcesso />} />
  
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
