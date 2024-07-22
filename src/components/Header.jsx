import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AppHeader = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={handleGoBack}
      >
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    paddingTop:40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'white', // Hoặc màu nền bạn muốn cho header
  },
  backButton: {
    backgroundColor: '#F7F7F9',
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppHeader;