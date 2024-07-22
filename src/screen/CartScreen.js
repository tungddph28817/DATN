import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { AntDesign, Feather } from "@expo/vector-icons";

const shoes = [
  {
    id: "1",
    name: "Nike Air Jordan",
    price: "3020000",
    image:
      "https://i.pinimg.com/originals/c5/64/d6/c564d65c4f903ce1cc89bb09acb54573.png",
    isFavorite: false,
  },
  {
    id: "2",
    name: "Nike Air Max",
    price: "2750000",
    image:
      "https://i.pinimg.com/originals/34/86/54/348654cc9b185bcccbeea80d2fae2bf8.png",
    isFavorite: true,
  },
];

const CartItem = ({ item, onDelete, onIncrease, onDecrease }) => {
  const leftSwipe = () => (
    <View style={styles.leftSwipeContainer}>
      <View style={styles.quantityAdjuster}>
        <TouchableOpacity onPress={onIncrease} style={styles.adjustButton}>
          <Text style={styles.adjustButtonText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity onPress={onDecrease} style={styles.adjustButton}>
          <Text style={styles.adjustButtonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const rightSwipe = () => (
    <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
      <Feather name="trash-2" size={24} color="white" />
    </TouchableOpacity>
  );

  return (
    <Swipeable renderLeftActions={leftSwipe} renderRightActions={rightSwipe}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <View style={styles.itemInfo}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>₫{item.price.toLocaleString()}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <Text style={styles.quantity}>{item.quantity}</Text>
        </View>
      </View>
    </Swipeable>
  );
};

const CartScreen = () => {
  const [cartItems, setCartItems] = useState(
    shoes.slice(0, 3).map((shoe) => ({ ...shoe, quantity: 1 }))
  );

  const deleteItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const adjustQuantity = (id, amount) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const [cost, setCost] = useState({
    subtotal: cartItems.reduce(
      (sum, item) =>
        sum + parseInt(item.price.replace(",", "")) * item.quantity,
      0
    ),
    delivery: 60000,
    total:
      cartItems.reduce(
        (sum, item) =>
          sum + parseInt(item.price.replace(",", "")) * item.quantity,
        0
      ) + 60000,
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <CartItem
            item={item}
            onDelete={() => {
                deleteItem(item.id)
                setCost({
                    ...cost,
                    subtotal: cost.subtotal - parseInt(item.price.replace(",", "")) * item.quantity,
                    total: cost.total - parseInt(item.price.replace(",", "")) * item.quantity,
                })
            }}
            onIncrease={() => {
                adjustQuantity(item.id, 1)
                setCost({
                    ...cost,
                    subtotal: cost.subtotal + parseInt(item.price.replace(",", "")),
                    total: cost.total + parseInt(item.price.replace(",", "")),
                })
            }}
            onDecrease={() =>{
                adjustQuantity(item.id, -1)
                setCost({
                    ...cost,
                    subtotal: cost.subtotal - parseInt(item.price.replace(",", "")),
                    total: cost.total - parseInt(item.price.replace(",", "")),
                })

            }}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.summary}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Tiền sản phẩm</Text>
          <Text style={styles.summaryValue}>
            ₫{cost.subtotal.toLocaleString()}
          </Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Phí V.Chuyển</Text>
          <Text style={styles.summaryValue}>
            ₫{cost.delivery.toLocaleString()}
          </Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.totalText}>Tổng tiền</Text>
          <Text style={styles.totalValue}>₫{cost.total.toLocaleString()}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 15,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  itemPrice: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  quantityContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    padding: 10,
    minWidth: 40,
    alignItems: "center",
  },
  quantity: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  leftSwipeContainer: {
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
  },
  quantityAdjuster: {
    backgroundColor: "#4A80F0",
    borderRadius: 15,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginLeft: "auto",
    marginRight: 15,
    height: 120,
    width: 50,
  },
  adjustButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  adjustButtonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  quantityText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 15,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  itemPrice: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  deleteButton: {
    backgroundColor: "#FF3B30",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: "100%",
  },
  deleteButton: {
    backgroundColor: "#FF3B30",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: "100%",
  },
  summary: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 16,
    color: "#666",
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  totalValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A80F0",
  },
  checkoutButton: {
    backgroundColor: "#4A80F0",
    borderRadius: 15,
    padding: 18,
    alignItems: "center",
    marginTop: 20,
  },
  checkoutButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CartScreen;
