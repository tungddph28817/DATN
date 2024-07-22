import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SearchBar = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const onFous = () => {
    console.log("Focused");
    navigation.navigate("Search");
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons
          name="search-outline"
          size={20}
          color="black"
          style={styles.searchIcon}
        />
        <TextInput
        onFocus={onFous}
          style={styles.input}
          placeholder="Tìm ngay đôi giày cho riêng bạn"
          placeholderTextColor="#8E8E93"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      <TouchableOpacity style={styles.filterButton}>
        <Ionicons name="options-outline" size={32} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    height: 56,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000000",
  },
  filterButton: {
    backgroundColor: "#4A7AFF",
    borderRadius: 30,
    padding: 10,
    marginLeft: 12,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SearchBar;
