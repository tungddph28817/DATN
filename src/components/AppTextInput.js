import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AppTextInput = ({ value, title, placeholder, onChangeText, isPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={isPassword && !showPassword}
        />
        {isPassword && (
          <TouchableOpacity onPress={toggleShowPassword} style={styles.iconContainer}>
            <Ionicons
              name={showPassword ? 'eye-off' : 'eye'}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'#f7f7f9',
    borderRadius: 14,
    height:48
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  iconContainer: {
    padding: 10,
  },
});

export default AppTextInput;