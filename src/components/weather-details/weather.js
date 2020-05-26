import React from "react";
import { View, Image, Text } from "react-native";

import SunnyIcon from "../../assets/icons/sunny";

export default function ShowWeather({ weather }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* <Image alt="Nothing to show" /> */}
      <SunnyIcon />
      <Text
        style={{
          fontSize: 56,
          marginTop: 20,
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        {"12 C"}
      </Text>
    </View>
  );
}
