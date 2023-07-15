import { View, Text, StyleSheet, LogBox } from "react-native";
import React from "react";
import FlashMessage from "react-native-flash-message";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_300Light,
  useFonts,
} from "@expo-google-fonts/poppins";
import { PaperProvider, configureFonts } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";
import { login, Home, Profile, Login } from "./screens";

LogBox.ignoreAllLogs();
const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold,
    Poppins_300Light,
  });
  return fontsLoaded ? (
    <PaperProvider
      theme={{
        fonts: configureFonts({
          default: {
            poppinsRegular: {
              fontFamily: "Poppins_400Regular",
              fontWeight: "normal",
            },
            poppinsMedium: {
              fontFamily: "Poppins_500Medium",
              fontWeight: "normal",
            },
            poppinsBold: {
              fontFamily: "Poppins_700Bold",
              fontWeight: "normal",
            },
            poppinsSemiBold: {
              fontFamily: "Poppins_600SemiBold",
              fontWeight: "normal",
            },
            poppinsLight: {
              fontFamily: "Poppins_300Light",
              fontWeight: "normal",
            },
          },
        }),
      }}
    >
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
            headerStyle: { backgroundColor: "#3500C6" },
            headerTintColor: "white",
            headerShadowVisible: false,
          }}
        >
          <Stack.Screen name={"Login"} component={Login} />
          <Stack.Screen name={"Home"} component={Home} />
          <Stack.Screen
            name={"Profile"}
            component={Profile}
            options={{
              headerShown: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <FlashMessage position="top" />
    </PaperProvider>
  ) : (
    <AppLoading />
  );
};

export default App;
