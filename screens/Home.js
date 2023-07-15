import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Separator, ButtonPrimary } from "../component";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 40,
    paddingVertical: 40,
  },
  card: {
    width: "100%",
    height: 450,
    borderWidth: 3,
    borderColor: "#D9D9D9",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
});

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={require("../assets/avatar.png")} />
        <Separator h={20} />
        <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 25 }}>
          Rizki Fadillah
        </Text>
        <Text
          style={{
            fontFamily: "Poppins_300Light",
            fontSize: 16,
            color: "#565656",
            textAlign: "center",
          }}
        >
          Mahasiswa sistem informasi di institut teknologi telkom surabaya
        </Text>
        <Separator h={40} />
        <ButtonPrimary
          onPress={() => navigation.navigate("Profile")}
          text={"Profile"}
        />
      </View>
    </View>
  );
};

export default Home;
