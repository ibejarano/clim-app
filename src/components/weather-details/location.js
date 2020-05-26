import React from "react";
import { View, Text } from "react-native";

export default function LocationDetails({
  currentLocation: { city, country },
}) {
  return (
    <View>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          width: 240,
          textAlign: "center",
        }}
      >
        {city}
      </Text>
      <Text style={{ fontSize: 22, width: 240, textAlign: "center" }}>
        {country}
      </Text>
    </View>
  );
}
