import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Para manejar errores
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Limpia errores previos

    try {
      const res = await fetch("http://localhost:4000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        // Si el backend envía un error (ej. email duplicado)
        throw new Error(data.error || "Fallo al registrarse");
      }

      // Si el registro es exitoso
      console.log(data.message); // "User registered"
      // Redirige al login para que inicie sesión
      navigate("/login");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);
      setError(err.message || "No se pudo conectar al servidor.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white p-4">
      <div className="w-full max-w-md bg-slate-800 p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">
          Crear Cuenta
        </h2>
        <p className="text-center text-slate-400 mb-6">
          Bienvenido al Diario de Gimnasio 🏋️‍♂️
        </p>
        
        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Nombre
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Tu nombre"
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="tu@correo.com"
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Muestra el error si existe */}
          {error && (
            <p className="text-sm text-red-400 text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Registrarse
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-slate-400">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
