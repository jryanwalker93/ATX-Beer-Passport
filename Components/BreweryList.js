import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import MapView, { Marker } from "react-native-maps";

import { getAllBreweries } from "../database/index";
import data from "../Breweries.json";
import BreweryListItem from "./BreweryListItem";

const BreweryList = ({ navigation }) => {
  const [display, setDisplay] = useState("list");
  const [breweryList, setBreweryList] = useState([]);

  useEffect(() => {
    getAllBreweries()
      .then((breweries) => {
        setBreweryList(breweries.val());
      })
      .then(() => console.log("BREWERY LIST: ", breweryList));
  }, []);

  return (
    <ScrollView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 100,
          width: "100%",
        }}
      >
        <TouchableOpacity
          onPress={() =>
            display === "list" ? setDisplay("map") : setDisplay("list")
          }
          style={{
            height: "75%",
            width: "30%",
            borderColor: "orange",
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Text>View by: {display === "list" ? "list" : "map"}</Text>
        </TouchableOpacity>
      </View>
      {display === "list" ? (
        <View>
          {breweryList.length ? (
            breweryList.map((brewery, idx) => (
              <BreweryListItem
                brewery={brewery}
                navigation={navigation}
                key={idx}
              />
            ))
          ) : (
            <Text>Loading</Text>
          )}
        </View>
      ) : (
        <View style={{ height: "75%", width: "100%" }}>
          {breweryList.length ? (
            <MapView
              initialRegion={{
                latitude: 30.2672,
                longitude: -97.7431,
                latitudeDelta: 0.5,
                longitudeDelta: 0.5,
              }}
              style={{ height: 400, width: "100%" }}
            >
              {breweryList.map((brewery, idx) => (
                <Marker
                  key={idx}
                  coordinate={brewery.Coordinates}
                  title={brewery.Brewery}
                  style={{ height: 5, width: 5 }}
                  description="view brewery page"
                  onCalloutPress={() => {
                    navigation.navigate("Brewery", { brewery: brewery });
                  }}
                ></Marker>
              ))}
            </MapView>
          ) : (
            <Text>Loading</Text>
          )}
        </View>
      )}
    </ScrollView>
  );
};

export default BreweryList;
