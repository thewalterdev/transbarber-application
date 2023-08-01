import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { AuthProvider } from "./contexts/AuthContext";
import AppRouter from "./router";
import GlobalStyle from "./styles/global";

export default function App() {
  return (
    <>
      <ToastContainer />
      <AuthProvider>
        <GlobalStyle />
        <AppRouter />
      </AuthProvider>
    </>
  );
}
