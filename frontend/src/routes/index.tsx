import { Routes, Route } from "react-router-dom";
import { ClassificarNoticia, Historico, StatusModelo } from "../pages";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<ClassificarNoticia />} />
      <Route path="/historico" element={<Historico />} />
      <Route path="/status" element={<StatusModelo />} />
    </Routes>
  );
}
