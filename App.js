import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "./src/pages/SignIn";
import SignUp from "./src/pages/SignUp";
import Home from "./src/pages/Home";
import FormPage from "./src/pages/FormPage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="signin" component={SignIn} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="form" component={FormPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
