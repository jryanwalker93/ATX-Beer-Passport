import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { seedDatabase } from "./database/seed";
import SignUp from "./Components/SignUp";
import BreweryList from "./Components/BreweryList";
import HomeScreen from "./Components/HomeScreen";
import Brewery from "./Components/Brewery";
import BreweryListItem from "./Components/BreweryListItem";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Sign Up" component={SignUp}></Stack.Screen>
        <Stack.Screen
          name="Brewery List"
          component={BreweryList}
        ></Stack.Screen>
        <Stack.Screen name="Brewery" component={Brewery}></Stack.Screen>
        <Stack.Screen
          name="BreweryListItem"
          component={BreweryListItem}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
