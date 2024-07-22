import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeHeader = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={{...styles.backButton,
          backgroundColor: 'transparent',
        }}
        onPress={handleGoBack}
      >
      </TouchableOpacity>
      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
      }}>Khám phá Nike</Text>
      <TouchableOpacity
        style={styles.backButton}
        onPress={handleGoBack}
      >
        <Ionicons name="basket-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop:40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#f7f7f9',
    width:'100%',
    justifyContent:'space-between' // Hoặc màu nền bạn muốn cho header
  },
  backButton: {
    backgroundColor: 'white',
    width: 45,
    height: 45,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeHeader;