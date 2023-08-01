import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Cadastro from "../screens/VisitorRegister";

const AuthStack = createNativeStackNavigator();

type StackNavigation = {
  Login: undefined;
  Cadastro: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Cadastro" component={Cadastro} />
    </AuthStack.Navigator>
  );
}
