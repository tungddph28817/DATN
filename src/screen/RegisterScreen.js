import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert("Lỗi", "Mật khẩu không khớp");
      return;
    }
    // Xử lý logic đăng ký ở đây
    console.log("Register with:", name, email, password);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Đăng ký</Text>
        <Text style={styles.subtTitle}>Tạo tài khoản mới</Text>
      </View>

      <AppTextInput
        value={name}
        onChangeText={setName}
        title="Họ tên"
        placeholder="Nhập họ tên của bạn"
      />

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

      <AppTextInput
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        title="Xác nhận mật khẩu"
        placeholder="Nhập lại mật khẩu của bạn"
        isPassword={true}
      />

      <AppButton
        textColor={"white"}
        backgroundColor={"#0D6EFD"}
        title={"Đăng ký"}
        onPress={handleRegister}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text
          style={{
            ...styles.subtTitle,
            textAlign: "center",
            fontSize: 17,
            fontWeight: "500",
            lineHeight: 20,
          }}
        >
          {`  Bạn đã có tài khoản? \n Đăng nhập ứng dụng ngay`}
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

export default RegisterScreen;
