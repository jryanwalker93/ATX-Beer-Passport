import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Linking,
  Button,
} from "react-native";
import openMap from "react-native-open-maps";

const Brewery = ({ route }) => {
  const { brewery } = route.params;
  const name = brewery.Brewery;
  return (
    <View>
      <Image source={{ uri: brewery.Logo }} style={styles.Logo}></Image>
      <Text style={styles.Info}>{brewery.Brewery}</Text>
      <Text
        style={styles.Info}
      >{`${brewery.streetAddress}, ${brewery.Zip}`}</Text>
      <Button
        title={`${brewery.phone}`}
        onPress={() => Linking.openURL(`tel:${brewery.phone}`)}
      ></Button>
      <Button
        title="Go to Website"
        onPress={() => Linking.openURL(`${brewery.Website}`)}
      ></Button>
      <Button
        title="Directions"
        onPress={() =>
          openMap({
            query: name,
            latitude: brewery.Coordinates.latitude,
            longitude: brewery.Coordinates.longitude,
          })
        }
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  Logo: {
    height: "50%",
    width: "100%",
  },
  Info: {
    height: "7%",
    fontSize: 25,
    fontFamily: "Avenir",
    paddingBottom: "5%",
  },
});

export default Brewery;
