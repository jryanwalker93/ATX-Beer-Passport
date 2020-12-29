import "react-native-gesture-handler";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import data from "../Breweries.json";

import BreweryListItem from "./BreweryListItem";

const BreweryList = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
        {data.map((brewery, idx) => (
          <BreweryListItem
            brewery={brewery}
            navigation={navigation}
            key={idx}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default BreweryList;
