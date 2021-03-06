import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

import * as Facebook from "expo-facebook";

import axios from "axios";
import { openDatabase } from "expo-sqlite";

// Facebook.initializeAsync();

async function logIn() {
  try {
    await Facebook.initializeAsync({ appId: "455650858959836" });
    const {
      type,
      token,
      expirationDate,
      permissions,
      declinedPermissions,
      userId,
    } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ["email"],
    });
    if (type === "success") {
      // Get the user's name using Facebook's Graph API
      const response = await axios.get(
        `https://graph.facebook.com/${userId}?fields=email,name&access_token=${token}`
      );
      alert(`Hi ${response.data.name}, ${response.data.email}!`);
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
    console.log(message);
  }
}

const SignUp = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  useEffect(() => {});

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ATX Beer Passport</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setUserEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry={true}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setUserPassword(text)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.loginBtn} onPress={logIn}>
          Facebook
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => registerUser(userEmail, userPassword)}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.loginText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 40,
    color: "#Fbb825",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  forgot: {
    color: "white",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
});

export default SignUp;
