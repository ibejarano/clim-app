import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import SearchIcon from "../../assets/icons/search";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(0);
    setSearchText("estas submitiando");
  };

  return (
    <View style={styles.searchContainer}>
      <SearchIcon />
      <TextInput
        style={styles.textinput}
        placeholder="Buscar ciudad..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onSubmit={handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 25,
    width: 340,
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    height: 44,
  },
  textinput: {
    fontSize: 24,
    color: "white",
    marginLeft: 10,
  },
});
