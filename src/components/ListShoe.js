import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ShoeItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Detail", { item });
      }}
      style={styles.shoeItem}
    >
      <TouchableOpacity style={styles.favoriteButton}>
        <Ionicons name="heart-outline" size={24} color="#000" />
      </TouchableOpacity>
      <Image source={{ uri: item.image }} style={styles.shoeImage} />
      <Text style={styles.bestSeller}>BÁN CHẠY</Text>
      <Text style={styles.shoeName}>{item.name}</Text>
      <Text style={styles.shoePrice}>${item.price}</Text>
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={24} color="#FFF" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const PopularShoesList = ({isFav}) => {
  const shoes = [
    {
      id: "1",
      name: "Nike Air Jordan",
      price: "3,020,000",
      image:
        "https://i.pinimg.com/originals/c5/64/d6/c564d65c4f903ce1cc89bb09acb54573.png",
      isFavorite: false,
    },
    {
      id: "2",
      name: "Nike Air Max",
      price: "2,750,000",
      image:
        "https://i.pinimg.com/originals/34/86/54/348654cc9b185bcccbeea80d2fae2bf8.png",
      isFavorite: true,
    },
    {
      id: "3",
      name: "Adidas Ultraboost",
      price: "4,200,000",
      image:
        "https://i.pinimg.com/originals/34/86/54/348654cc9b185bcccbeea80d2fae2bf8.png",
      isFavorite: false,
    },
    {
      id: "4",
      name: "Puma RS-X",
      price: "2,300,000",
      image:
        "https://i.pinimg.com/originals/34/86/54/348654cc9b185bcccbeea80d2fae2bf8.png",
      isFavorite: true,
    },
    {
      id: "5",
      name: "Reebok Classic",
      price: "1,800,000",
      image:
        "https://i.pinimg.com/originals/34/86/54/348654cc9b185bcccbeea80d2fae2bf8.png",
      isFavorite: false,
    },
    {
      id: "6",
      name: "Vans Old Skool",
      price: "1,650,000",
      image:
        "https://i.pinimg.com/originals/34/86/54/348654cc9b185bcccbeea80d2fae2bf8.png",
      isFavorite: true,
    },
    {
      id: "7",
      name: "Converse Chuck Taylor",
      price: "1,500,000",
      image:
        "https://i.pinimg.com/originals/34/86/54/348654cc9b185bcccbeea80d2fae2bf8.png",
      isFavorite: false,
    },
    {
      id: "8",
      name: "New Balance 997",
      price: "2,900,000",
      image:
        "https://i.pinimg.com/originals/34/86/54/348654cc9b185bcccbeea80d2fae2bf8.png",
      isFavorite: true,
    },
    {
      id: "9",
      name: "Asics Gel-Lyte III",
      price: "2,450,000",
      image:
        "https://i.pinimg.com/originals/34/86/54/348654cc9b185bcccbeea80d2fae2bf8.png",
      isFavorite: false,
    },
    {
      id: "10",
      name: "Skechers D'Lites",
      price: "1,950,000",
      image:
        "https://i.pinimg.com/originals/34/86/54/348654cc9b185bcccbeea80d2fae2bf8.png",
      isFavorite: true,
    },
  ];

  return (
    <View style={styles.container}>
      {!isFav && (
        <View style={styles.header}>
          <Text style={styles.title}>Giày Phổ Biến</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 360 }}
        data={shoes}
        renderItem={({ item }) => <ShoeItem item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  seeAll: {
    color: "#4A7AFF",
    fontSize: 16,
  },
  row: {
    justifyContent: "space-between",
  },
  shoeItem: {
    width: "48%",
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  favoriteButton: {
    position: "absolute",
    right: 12,
    top: 12,
    zIndex: 1,
  },
  shoeImage: {
    width: "100%",
    height: 120,
    resizeMode: "contain",
    marginBottom: 8,
  },
  bestSeller: {
    backgroundColor: "#4A7AFF",
    color: "#FFF",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    fontSize: 12,
    marginBottom: 4,
  },
  shoeName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  shoePrice: {
    fontSize: 14,
    color: "#4A7AFF",
    marginBottom: 8,
  },
  addButton: {
    backgroundColor: "#4A7AFF",
    borderBottomEndRadius: 12,
    borderTopStartRadius: 12,
    padding: 8,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});

export default PopularShoesList;
