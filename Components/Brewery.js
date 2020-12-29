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

const Brewery = ({ props, route }) => {
  const { brewery } = route.params;
  return (
    <View>
      <Image source={{ uri: brewery.Logo }} style={styles.Logo}></Image>
      <Text>{brewery.Brewery}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Logo: {
    height: "75%",
    width: "100%",
  },
});

export default Brewery;
