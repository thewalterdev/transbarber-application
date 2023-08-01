import { useAuth } from "../contexts/AuthContext";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { Loading } from "../components/Loading";

const Routes = () => {
  const { signedIn, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return signedIn ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
