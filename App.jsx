import React from "react";
import MainProvider from "./src/contexts";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import Routes from "./src/routes";

export default function App() {
  return (
    <MainProvider>
      <NavigationContainer>
        <StatusBar />
        <Routes />
      </NavigationContainer>
    </MainProvider>
  );
}
