import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import React from "react";

const FormInput = (props) => {
  return (
    <View>
      <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 16 }}>
        {props.head}
      </Text>
      <TextInput
        label={props.label}
        placeholder={props.placeholder}
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

export default FormInput;
