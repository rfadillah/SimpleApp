import { View, Text, StyleSheet, Image, Linking } from "react-native";
import React from "react";
import { Separator, ButtonPrimary } from "../component";
import { TextInput } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3500C6",
  },
  bigCard: {
    flex: 11,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: "white",
    paddingVertical: 40,
    paddingHorizontal: 40,
    alignItems: "center",
  },
});

const Profile = ({ navigation }) => {
  const handleOpenInBrowser = () => {
    const url = "https://www.linkedin.com/in/rizki-fadillah-7b2435250/";
    Linking.openURL(url);
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}></View>
      <View style={styles.bigCard}>
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
          rizkifadillah4050@gmail.com
        </Text>
        <Separator h={30} />
        <TextInput
          style={{ width: "100%" }}
          editable={false}
          placeholder="Masukkan Password"
          right={
            <TextInput.Icon
              onPress={handleOpenInBrowser}
              icon={() => (
                <MaterialCommunityIcons
                  name="open-in-new"
                  size={24}
                  color={"#3500C6"}
                />
              )}
            />
          }
          mode="outlined"
          value={"Linked in"}
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
        <Separator h={40} />
        <ButtonPrimary
          onPress={() => navigation.replace("Login")}
          text={"Keluar"}
        />
      </View>
    </View>
  );
};

export default Profile;
