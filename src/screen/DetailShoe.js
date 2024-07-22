import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ShoeDetailScreen = ({ navigation }) => {
  const [isFavorite, setIsFavorite] = useState(false);
    const screenWidth = Dimensions.get("window").width;
  const shoeColors = [
    { id: 1, color: "https://static-m2-prod.aaw.com/media/catalog/product/s/f/sftp_t_taf819719-103-phsrh000-2000.jpg" },
    { id: 2, color: "https://i.pinimg.com/originals/34/86/54/348654cc9b185bcccbeea80d2fae2bf8.png" },
    { id: 3, color: "https://i.pinimg.com/originals/59/50/16/595016a51c9c2577c2d0f04e6334aa60.png" },
    { id: 4, color: "https://i.pinimg.com/736x/42/f4/70/42f470022634f563724e4074cacb7a4a.jpg" },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sneaker Shop</Text>
        <TouchableOpacity>
          <Ionicons name="cart-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.shoeName}>Nike Air Max 270 Essential</Text>
      <Text style={styles.shoeCategory}>Men's Shoes</Text>
      <Text style={styles.shoePrice}>$179.39</Text>

      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/87/ed/d1/87edd1c1a8065c107a6dafbac88b3128.jpg",
          }}
          style={styles.shoeImage}
        />
      </View>

      <View style={styles.colorSelector}>
        {shoeColors.map((colorItem) => (
          <TouchableOpacity style={{
            width:60,
            height:60,
            borderRadius:12,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#FFF',
          }} key={colorItem.id}>
            <Image
              style={{
                width: 50,
                height: 50,
              }}
              source={{ uri: colorItem.color }}
            />
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.description}>
        The Max Air 270 Unit Delivers Unrivaled, All-Day Comfort. The Sleek,
        Running-Inspired Design Roots You To Everything Nike.......
      </Text>
      <TouchableOpacity>
        <Text style={styles.readMore}>Read More</Text>
      </TouchableOpacity>

      <View style={styles.bottomActions}>
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => setIsFavorite(!isFavorite)}
        >
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={24}
            color={isFavorite ? "red" : "black"}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addToCartButton}>
          <Ionicons name="cart-outline" size={24} color="white" />
          <Text style={styles.addToCartText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f9",
    padding: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  shoeName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  shoeCategory: {
    fontSize: 16,
    color: "#888",
    marginBottom: 10,
  },
  shoePrice: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  shoeImage: {
    width: 300,
    height: 200,
    resizeMode: "contain",
  },
  colorSelector: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  colorOption: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
  },
  readMore: {
    color: "#4A7AFF",
    fontWeight: "bold",
  },
  bottomActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    position: "absolute",
    bottom: 20,
    width: "100%",
    alignSelf: "center",
    paddingHorizontal: 20,
  },
  favoriteButton: {
    padding: 10,
    backgroundColor: "#FFF",
    borderRadius: 20,
  },
  addToCartButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4A7AFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  addToCartText: {
    color: "#FFF",
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default ShoeDetailScreen;
