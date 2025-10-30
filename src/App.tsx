import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register"; // Importa la página de Registro
import Navbar from "./components/Navbar"; // Importa tu Navbar

// --- Componentes Placeholder (Temporales) ---
// (Puedes moverlos a sus propios archivos en src/pages/ luego)

function Dashboard() {
  return (
    <div className="bg-slate-900 min-h-screen text-white">
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl">Bienvenido a tu Dashboard</h1>
        {/* Aquí iría el resto de tu dashboard (rutinas, etc.) */}
      </div>
    </div>
  );
}

function CreateRoutine() {
   return (
    <div className="bg-slate-900 min-h-screen text-white">
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl">Crear Nueva Rutina</h1>
        {/* Aquí iría el formulario para crear rutinas */}
      </div>
    </div>
  );
}
// --- Fin de Componentes Placeholder ---


export default function App() {
  return (
    // Define todas las rutas de tu aplicación
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create" element={<CreateRoutine />} />
    </Routes>
  );
}

