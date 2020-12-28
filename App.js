import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { seedDatabase } from "./database/seed";
import background from "./assets/background.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        style={{ width: "100%", height: "100%" }}
      >
        <Text
          style={{
            color: "#Fbb825",
            fontSize: 45,
            paddingTop: "25%",
            paddingLeft: "10%",
            margin: "auto",
            // justifyContent: "center",
          }}
        >
          ATX Beer Passport
        </Text>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#add8e6",
    alignItems: "center",
    justifyContent: "center",
  },
});
