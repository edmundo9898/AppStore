import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import Detail from "../screens/detail";
import SignIn from "../screens/signIn";
import SignUp from "../screens/signUp";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />

      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
