import * as React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import Header from "./components/header";
import WeatherDetails from "./components/weather-details";

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

const fetchFonts = () => {
  return Font.loadAsync({
    "pacifico-regular": require("../assets/fonts/Pacifico-Regular.ttf"),
  });
};

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <WeatherDetails />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
