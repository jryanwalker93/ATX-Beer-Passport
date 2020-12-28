import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import background from "../assets/background.jpg";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background}>
        <Text style={styles.title}>ATX Beer Passport</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigation.navigate("Sign Up")}
          >
            <Text style={styles.buttonText}>Sign Up!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigation.navigate("Brewery List")}
          >
            <Text style={styles.buttonText}>Explore</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#add8e6",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#Fbb825",
    fontSize: 45,
    paddingTop: "25%",
    paddingLeft: "10%",
    margin: "auto",
  },
  background: { width: "100%", height: "100%" },
  buttonContainer: {
    width: "100%",
    height: "10%",
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-around",
  },
  buttons: {
    width: "40%",
    height: "7%",
    backgroundColor: "rgba(190, 190, 190, 0.5)",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#C91B26",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default HomeScreen;
