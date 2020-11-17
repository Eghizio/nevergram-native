import "react-native-gesture-handler";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Navigation from "./navigation";
import DummyProvider from "./context/DummyProvider";


const App = () => {
  return (
    <SafeAreaProvider>
      <DummyProvider>
        <Navigation/>
      </DummyProvider>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
};

export default App;