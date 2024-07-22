import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoardingScreen from "../screen/OnBoardingScreen";
import { compose } from "@reduxjs/toolkit";
import LoginScreen from "../screen/LoginScreen";
import RegisterScreen from "../screen/RegisterScreen";
import ForgotPasswordScreen from "../screen/ForgotPass";
import OTPScreen from "../screen/OtpScreen";
import AppHeader from "../components/Header";
import Splash from "../screen/Splash";
import HomeTab from "../screen/HomeTab";
import ShoeDetailScreen from "../screen/DetailShoe";
import SearchScreen from "../screen/History";
const Stack = createStackNavigator();

// Mảng chứa thông tin các màn hình
const screens = [
  { name: "Splash", component: Splash, showHeader: false },
  { name: "OnBoarding", component: OnBoardingScreen, showHeader: false },
  { name: "Login", component: LoginScreen, showHeader: true },
  { name: "Register", component: RegisterScreen, showHeader: true },
  { name: "ForgotPassword", component: ForgotPasswordScreen, showHeader: true },
  { name: "OTP", component: OTPScreen, showHeader: true },
  { name: "HomeTab", component: HomeTab, showHeader: false },
  { name: "Detail", component: ShoeDetailScreen, showHeader: false },
  { name: "Search", component: SearchScreen, showHeader: false },

];

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="OnBoarding"
        screenOptions={{
          header: (props) => <AppHeader {...props} />,
        }}
      >
        {screens.map((screen) => (
          <Stack.Screen
            options={{
              headerShown: screen.showHeader,
            }}
            key={screen.name}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
