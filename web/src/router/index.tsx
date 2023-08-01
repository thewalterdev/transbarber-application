import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { useAuth } from "../contexts/AuthContext";
import Home from "../pages/Home";
import CustomRoute from "./CustomRoute";

export default function AppRouter() {
  const { loading } = useAuth();

  if (loading) {
    return <span>Loading...</span>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CustomRoute authRoute Page={Login} />} path="/login" />
        <Route
          element={<CustomRoute authRoute Page={Register} />}
          path="/registro"
        />
        <Route element={<CustomRoute appRoute Page={Home} />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}
