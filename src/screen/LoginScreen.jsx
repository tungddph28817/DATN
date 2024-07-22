import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import LottieView from "lottie-react-native";

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigation.navigate("HomeTab");
    // Xử lý logic đăng nhập ở đây
    console.log("Login with:", email, password);
  };

  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 200,
          height: 100,
          alignSelf: "center",
          resizeMode: "contain",
          marginBottom: 32,
        }}
        source={require("../../assets/nike2.png")}
      />
      <View>
        <Text style={styles.header}>Đăng nhập</Text>
        <Text style={styles.subtTitle}>Đăng nhập bằng email hoặc Google</Text>
      </View>

      <AppTextInput
        value={email}
        onChangeText={setEmail}
        title="Email"
        placeholder="Nhập email của bạn"
      />

      <AppTextInput
        value={password}
        onChangeText={setPassword}
        title="Mật khẩu"
        placeholder="Nhập mật khẩu của bạn"
        isPassword={true}
      />
      <TouchableOpacity 
      onPress={()=>{
        navigation.navigate("ForgotPassword");
      }}
      >
        <Text
          style={{
            ...styles.subtTitle,
            textAlign: "right",
          }}
        >
          Bạn quên mật khẩu?
        </Text>
      </TouchableOpacity>
      <AppButton
        onPress={handleLogin}
        textColor={"white"}
        backgroundColor={"#0D6EFD"}
        title={"Đăng nhập"}
      />
      <TouchableOpacity
       onPress={() => {
          navigation.navigate("Register");
       }}
      >
        <Text
          style={{
            ...styles.subtTitle,
            textAlign: "center",
            fontSize:17,
            fontWeight:'500'
          }}
        >
          Chưa có tài khoản? Đăng kí ngay
        </Text>
      </TouchableOpacity>
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
  loginButton: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 16,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoginScreen;
