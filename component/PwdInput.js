import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import React, { useState } from "react";
import Separator from "./Separator";

const PwdInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View>
      <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 16 }}>
        Password
      </Text>
      <TextInput
        secureTextEntry={!showPassword}
        placeholder="Masukkan Password"
        right={
          <TextInput.Icon
            onPress={togglePasswordVisibility}
            icon={showPassword ? "eye-off" : "eye"}
          />
        }
        mode="outlined"
        value={props.value}
        onChangeText={props.onChangeText}
        theme={{
          roundness: 10,
          colors: {
            primary: "#1651C3",
            text: "black",
            placeholder: "gray",
            background: "#ffffff",
          },
        }}
      />
    </View>
  );
};

export default PwdInput;
