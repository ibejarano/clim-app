import React from "react";
import { View, StyleSheet } from "react-native";

import LinkedInIcon from "../../assets/icons/linkedin";
import TwitterIcon from "../../assets/icons/twitter";
import GithubIcon from "../../assets/icons/github";

export default function SocialIcons() {
  return (
    <View style={styles.iconsContainer}>
      <LinkedInIcon />
      <TwitterIcon />
      <GithubIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 10,
  },
});
