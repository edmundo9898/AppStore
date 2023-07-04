import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import Detail from "../screens/detail";
import SignIn from "../screens/auth/signIn";
import SignUp from "../screens/auth/signUp";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />

      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
