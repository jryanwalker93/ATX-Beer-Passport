import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

const BreweryListItem = ({ brewery, navigation }) => {
  return (
    <View style={{ backgroundColor: "#d3d3d3" }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Brewery", { brewery: brewery })}
      >
        <View style={styles.Brewery}>
          <Image source={{ uri: brewery.Logo }} style={styles.Logo}></Image>
          <Text style={styles.Text}>{brewery.Brewery}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Brewery: {
    borderColor: "orange",
    borderWidth: 2,
    margin: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  Text: {
    margin: 5,
    fontFamily: "Avenir",
    fontSize: 15,
    color: "black",
  },
  Logo: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },

  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
});

export default BreweryListItem;
