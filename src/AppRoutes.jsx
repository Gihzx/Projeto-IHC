import { BrowserRouter, Route, Routes } from "react-router-dom";

import AbonoFaltas from "./pages/AbonoFaltas";
import DetalhesProcesso from "./pages/atendimento";
import Cadastro from "./pages/cadastro";
import Cradt from "./pages/Cradt";
import Home from "./pages/Home";
import Login from "./pages/login";
import { Status } from "./pages/status";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/card" element={<Home />} />
        <Route path="/AbonoFaltas" element={<AbonoFaltas />}></Route>
        <Route path="/cradt" element={<Cradt />}></Route>
        <Route path="/solicitacoes/:id" element={<DetalhesProcesso />} />
        <Route path="/status" element={<Status />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
