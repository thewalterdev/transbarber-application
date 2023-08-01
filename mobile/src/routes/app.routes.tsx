import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import Home from "../screens/Home";

const AppStack = createNativeStackNavigator();

type StackNavigation = {
  Home: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function AppRoutes() {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
  );
}
