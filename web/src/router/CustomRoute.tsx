import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

interface Props {
  authRoute?: boolean;
  appRoute?: boolean;
  Page: React.ElementType;
}

export default function CustomRoute({
  authRoute = false,
  appRoute = false,
  Page,
}: Props) {
  const { signedIn, loading } = useAuth();

  if (loading) {
    return <span>Loading...</span>;
  }

  if (appRoute === true) {
    if (signedIn) {
      return <Page />;
    } else {
      return <Navigate to="/login" />;
    }
  }

  if (authRoute === true) {
    if (!signedIn) {
      return <Page />;
    } else {
      return <Navigate to="/" />;
    }
  }
}
