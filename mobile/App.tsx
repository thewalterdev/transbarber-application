import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { Loading } from "./src/components/Loading";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { AuthProvider } from "./src/contexts/AuthContext";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
        <StatusBar style="auto" />
      </AuthProvider>
    </NavigationContainer>
  );
}
