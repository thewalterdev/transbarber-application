import { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Loading } from "../components/Loading";

interface User {
  username: string;
}

interface AuthContextProps {
  signedIn: boolean;
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  loading: boolean;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storedUser = await AsyncStorage.getItem("@TBAuth:user");

      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setLoading(false);
      } else {
        setLoading(false);
      }
    }

    loadStorageData();
  });

  const login = async (userData: User) => {
    setUser(userData);

    await AsyncStorage.setItem("@TBAuth:user", JSON.stringify(userData));
  };

  const logout = () => {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  };

  return (
    <AuthContext.Provider
      value={{ signedIn: !!user, user, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
