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

const NotificationItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.notificationItem}>
      <Image source={{ uri: item.image }} style={styles.shoeImage} />
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.oldPrice}>${item.oldPrice}</Text>
          <Text style={styles.newPrice}>${item.newPrice}</Text>
        </View>
      </View>
      <Text style={styles.timeAgo}>{item.timeAgo}</Text>
    </TouchableOpacity>
  );
};

const NotificationScreen = () => {
  const notifications = [
    {
      id: "1",
      title: "We Have New Products With Offers",
      oldPrice: "364.95",
      newPrice: "260.00",
      image: "https://i.pinimg.com/originals/34/86/54/348654cc9b185bcccbeea80d2fae2bf8.png",
      timeAgo: "7 min ago",
    },
    {
        id: "1",
        title: "We Have New Products With Offers",
        oldPrice: "364.95",
        newPrice: "260.00",
        image: "https://i.pinimg.com/originals/34/86/54/348654cc9b185bcccbeea80d2fae2bf8.png",
        timeAgo: "7 min ago",
      },
      {
        id: "1",
        title: "We Have New Products With Offers",
        oldPrice: "364.95",
        newPrice: "260.00",
        image: "https://i.pinimg.com/originals/34/86/54/348654cc9b185bcccbeea80d2fae2bf8.png",
        timeAgo: "7 min ago",
      },
    {
      id: "2",
      title: "We Have New Products With Offers",
      oldPrice: "364.95",
      newPrice: "260.00",
      image: "https://i.pinimg.com/originals/34/86/54/348654cc9b185bcccbeea80d2fae2bf8.png",
      timeAgo: "40 min ago",
    },
    {
      id: "3",
      title: "We Have New Products With Offers",
      oldPrice: "364.95",
      newPrice: "260.00",
      image: "https://i.pinimg.com/originals/34/86/54/348654cc9b185bcccbeea80d2fae2bf8.png",
      timeAgo: "40 min ago",
    },
    {
      id: "4",
      title: "We Have New Products With Offers",
      oldPrice: "364.95",
      newPrice: "260.00",
      image: "https://i.pinimg.com/originals/34/86/54/348654cc9b185bcccbeea80d2fae2bf8.png",
      timeAgo: "40 min ago",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Notifications</Text>
        <TouchableOpacity>
          <Ionicons name="trash-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Recent</Text>
      <FlatList
        data={notifications.slice(0, 5)}
        renderItem={({ item }) => <NotificationItem item={item} />}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.sectionTitle}>Yesterday</Text>
      <FlatList
        data={notifications.slice(2)}
        renderItem={({ item }) => <NotificationItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  notificationItem: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    alignItems: "center",
  },
  shoeImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    marginTop: 16,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  oldPrice: {
    fontSize: 14,
    color: "#888",
    textDecorationLine: "line-through",
    marginRight: 8,
  },
  newPrice: {
    fontSize: 14,
    color: "#4A7AFF",
    fontWeight: "bold",
  },
  timeAgo: {
    fontSize: 12,
    color: "#888",
    position: "absolute",
    top: 12,
    right: 12,
  },
});

export default NotificationScreen;