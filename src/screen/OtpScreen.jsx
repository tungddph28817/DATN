import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Keyboard } from "react-native";
import AppButton from "../components/AppButton";

const OTPScreen = ({ navigation }) => {
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [seconds, setSeconds] = useState(30);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const intervalRef = useRef(null);
  useEffect(() => {
    inputRefs.current[0].focus();
    intervalRef.current = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(intervalRef.current);
          setIsResendDisabled(false);
          return 30;
        }
        return prevSeconds - 1;
      });
    }, 1000);
  }, []);

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerifyOtp = () => {
    const otpString = otp.join("");
    console.log("Verifying OTP:", otpString);
    navigation.navigate("Login");
    // Implement your OTP verification logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Xác thực OTP</Text>
      <Text style={styles.subTitle}>
        Nhập mã OTP 4 chữ số đã được gửi đến số điện thoại của bạn
      </Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            value={digit}
            onChangeText={(value) => handleOtpChange(value, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            keyboardType="numeric"
            maxLength={1}
            ref={(ref) => (inputRefs.current[index] = ref)}
          />
        ))}
      </View>

      <AppButton
        textColor={"white"}
        backgroundColor={"#0D6EFD"}
        title={"Xác nhận"}
        onPress={handleVerifyOtp}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding:20
        }}
      >
        <Text
          style={{
            color: "#7D848D",
            fontWeight: "400",
          }}
        >
          {isResendDisabled ? "Gửi lại sau " : "Gửi lại ngay"}
        </Text>
        <Text
          style={{
            color: "#7D848D",
            fontWeight: "400",
          }}
        >
          {seconds + " giây"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "white",
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  subTitle: {
    color: "#707B81",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 32,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  otpInput: {
    width: 60,
    height: 60,
    borderRadius: 12,
    fontSize: 24,
    textAlign: "center",
    backgroundColor: "#F7F7F9",
  },
});

export default OTPScreen;
