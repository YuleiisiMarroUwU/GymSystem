import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold cursor-pointer" onClick={() => navigate("/dashboard")}>
        Diario de Gimnasio
      </h1>
      <div className="space-x-4">
        <button
          onClick={() => navigate("/create")}
          className="bg-blue-500 hover:bg-blue-700 px-3 py-1 rounded-lg"
        >
          Nueva Rutina
        </button>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-700 px-3 py-1 rounded-lg"
        >
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
}
