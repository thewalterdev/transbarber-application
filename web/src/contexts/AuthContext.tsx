import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextProps {
  login: (
    email: string,
    password: string
  ) => Promise<{ logged: boolean; error: string }>;
  logout: () => void;
  signedIn: boolean;
  user: User | null;
  loading: boolean;
  newAccount: (
    email: string,
    password: string,
    name: string
  ) => Promise<{ success: boolean; error: string }>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

interface AuthProviderProps {
  children: React.ReactNode;
}

interface APIReturningUser {
  token: string;
  user: {
    email: string;
    id: string;
    name: string;
  };
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storedUser = await localStorage.getItem("@TBAuth:user");

      if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
        setLoading(false);
      } else {
        setLoading(false);
      }
    }

    loadStorageData();
  }, []);

  async function login(email: string, password: string) {
    let logged: boolean = false;
    let error: string = "";
    await axios
      .post("http://localhost:3333/login", {
        email,
        password,
      })
      .then((res) => {
        const { user, token }: APIReturningUser = res.data;

        setCurrentUser({ email: user.email, name: user.name, id: user.id });

        localStorage.setItem(
          "@TBAuth:user",
          JSON.stringify({ name: user.name, email: user.email, id: token })
        );

        logged = true;
      })
      .catch((err) => {
        console.error(`Erro de login: ${err.response.data.error}`);
        logged = false;
        error = err.response.data.error;
      });

    return { logged, error };
  }

  async function newAccount(email: string, name: string, password: string) {
    let success: boolean = false;
    let error: string = "";

    await axios
      .post("http://localhost:3333/user", {
        email: email,
        name: name,
        password: password,
      })
      .then((res) => {
        console.log(res);
        success = true;
      })
      .catch((err) => {
        error = err.response.data.error;
      });

    return { success, error };
  }

  function logout() {
    setCurrentUser(null);
    localStorage.removeItem("@TBAuth:user");
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        user: currentUser,
        signedIn: !!currentUser,
        loading,
        newAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
