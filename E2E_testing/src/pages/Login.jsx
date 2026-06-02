import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
    });

    const data = await res.json();

    localStorage.setItem("token", data.token);

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-3xl font-bold">Login</h1>

      <input
        data-cy="email-input"
        placeholder="Email"
        className="border p-2"
      />

      <input
        data-cy="password-input"
        type="password"
        placeholder="Password"
        className="border p-2"
      />

      <button
        data-cy="login-btn"
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
}