import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

const ForgotPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    // Xử lý logic gửi email đặt lại mật khẩu ở đây
    console.log("Reset password for:", email);
    Alert.alert(
      "Đã gửi email",
      "Chúng tôi đã gửi hướng dẫn đặt lại mật khẩu đến email của bạn.",
      [{ text: "OK" , onPress: () => {
        navigation.navigate("OTP");
      }}]
    );
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/nike2.png")}
      />
      <View>
        <Text style={styles.header}>Quên mật khẩu</Text>
        <Text style={styles.subtTitle}>Nhập email để đặt lại mật khẩu</Text>
      </View>

      <AppTextInput
        value={email}
        onChangeText={setEmail}
        title="Email"
        placeholder="Nhập email của bạn"
      />

      <AppButton 
        textColor={'white'} 
        backgroundColor={'#0D6EFD'} 
        title={"Gửi yêu cầu đặt lại mật khẩu"} 
        onPress={handleResetPassword} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "white",
    gap: 10,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
    resizeMode: "contain",
    marginBottom: 32,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  subtTitle: {
    color: "#707B81",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
});

export default ForgotPasswordScreen;