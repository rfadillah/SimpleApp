import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";
import React from "react";

const styles = StyleSheet.create({
  buttonPrimary: {
    width: "100%",
    minHeight: 52,
    borderRadius: 10,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#3500C6",
  },
  textButton: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
    color: "white",
  },
});

const ButtonPrimary = (props) => {
  return (
    <>
      <Button
        mode="contained"
        onPress={props.onPress}
        style={styles.buttonPrimary}
      >
        <Text style={styles.textButton}>{props.text}</Text>
      </Button>
    </>
  );
};

export default ButtonPrimary;
