import { View, Text, StyleSheet, LogBox } from "react-native";
import React from "react";
import FlashMessage from "react-native-flash-message";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { PaperProvider, configureFonts } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";
import { login } from "./screens";

LogBox.ignoreAllLogs();
const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold,
  });
  return fontsLoaded ? (
    <View>
      <Text>App</Text>
    </View>
  ) : (
    <AppLoading />
  );
};

export default App;
