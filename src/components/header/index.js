import React from "react";
import { StyleSheet, View } from "react-native";

import HeaderTitle from "./title";
import SocialIcons from "./social-icons";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <HeaderTitle />
      <SocialIcons />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    position: "absolute",
    top: 28,
    height: 50,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "#ddd",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
