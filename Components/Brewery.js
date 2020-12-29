import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

const Brewery = ({ route }) => {
  const { brewery } = route.params;
  return (
    <View>
      <Image source={{ uri: brewery.Logo }} style={styles.Logo}></Image>
      <Text style={styles.Info}>{brewery.Brewery}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Logo: {
    height: "75%",
    width: "100%",
  },
  Info: {
    height: "10%",
    fontSize: 25,
    fontFamily: "Avenir",
  },
});

export default Brewery;
