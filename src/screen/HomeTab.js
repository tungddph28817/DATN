import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";
import FavoriteScreen from "./Favo";
import CartScreen from "./CartScreen";
import NotificationScreen from "../components/Noti";

// Tạo các component màn hình giả
const UserScreen = () => <></>;
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Favorite") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Notification") {
            iconName = focused ? "notifications" : "notifications-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "User") {
            iconName = focused ? "person" : "person-outline";
          }

          return (
            <Ionicons
              name={iconName}
              size={route.name == "Cart" ? 40 : 24}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: "#0D6EFD",
        tabBarInactiveTintColor: "#707B81",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          height: 80          
        },
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="User" component={UserScreen} />
    </Tab.Navigator>
  );
}
