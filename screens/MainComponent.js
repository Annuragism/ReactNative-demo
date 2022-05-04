import react from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Login";
import Home from "./Home";
import Profile from "./Profile";
import SignUp from "./SignUp";

const Stack = createStackNavigator();

const MainComponent = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="login" component={Login}></Stack.Screen>
      <Stack.Screen name="home" component={Home}></Stack.Screen>
      <Stack.Screen name="signup" component={SignUp}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MainComponent;
