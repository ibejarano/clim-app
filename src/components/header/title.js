import React, { useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

let customFonts = {
  // "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
  Pacifico: require("../../../assets/fonts/Pacifico-Regular.ttf"),
};

export default function HeaderTitle() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function fetchFonts() {
      await Font.loadAsync(customFonts);
      setFontLoaded(true);
    }
    fetchFonts();
  }, []);

  if (!fontLoaded) return <AppLoading />;
  else {
    return <Text style={styles.title}>Clim App</Text>;
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    textAlign: "left",
    fontFamily: "Pacifico",
  },
});
