import React from "react";
import { View, Text } from "react-native";

import Location from "./location";
import ShowWeather from "./weather";

const LOCATION = {
  city: "San Salvador de Jujuy",
  country: "Argentina",
};

const UPDATE_DATE = new Date();

export default function WeatherDetails() {
  return (
    <View
      style={{
        backgroundColor: "#c4c4c4",
        borderRadius: 20,
        padding: 50,
      }}
    >
      <ShowWeather />
      <Location currentLocation={LOCATION} />
      <UpdatedDate currentDate={UPDATE_DATE} />
    </View>
  );
}

function UpdatedDate({ currentDate }) {
  return (
    <Text style={{ fontSize: 12, textAlign: "center" }}>
      Ult. Actualizacion: {currentDate.toLocaleDateString()}
    </Text>
  );
}
