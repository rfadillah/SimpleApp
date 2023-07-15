import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { FormInput, Separator, PwdInput, ButtonPrimary } from "../component";
import { showMessage, hideMessage } from "react-native-flash-message";

const styles = StyleSheet.create({
  Keyboard: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
});

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username == "rizki" && password == "1abcdefg") {
      navigation.replace("Home");
    } else {
      showMessage({
        message: "username atau password salah",
        type: "danger",
      });
    }
  };

  return (
    <KeyboardAvoidingView style={styles.Keyboard}>
      <View style={styles.container}>
        <Image source={require("../assets/logo.png")} />
        <Separator h={"10%"} />
        <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 28 }}>
          Selamat datang
        </Text>
        <Text
          style={{
            fontFamily: "Poppins_400Regular",
            fontSize: 16,
            color: "#565656",
          }}
        >
          Masuk untuk melanjutkan
        </Text>
        <Separator h={30} />
        <FormInput
          head={"Username"}
          value={username}
          onChangeText={setUsername}
          placeholder={"Masukkan username"}
        ></FormInput>
        <Separator h={20} />
        <PwdInput value={password} onChangeText={setPassword} />
        <Separator h={40} />
        <ButtonPrimary onPress={handleLogin} text={"Masuk"} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
