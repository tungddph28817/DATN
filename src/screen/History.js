import React from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={24} color="black" />
        <Text style={styles.headerTitle}>Tìm kiếm</Text>
        <Text style={styles.cancelButton}>Cancel</Text>
      </View>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput 
          style={styles.searchInput}
          placeholder="Tìm giày cho riêng bạn"
        />
        <Ionicons name="mic" size={20} color="blue" style={styles.micIcon} />
      </View>
      
      <Text style={styles.sectionTitle}>Giày đã tìm</Text>
      
      <ScrollView>
        {['New Shoes', 'Nike Top Shoes', 'Nike Air Force', 'Shoes', 'Snakers Nike Shoes', 'Regular Shoes'].map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Ionicons name="time-outline" size={20} color="gray" />
            <Text style={styles.listItemText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f9',
    paddingTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '500',
  },
  cancelButton: {
    color: 'blue',
    fontWeight: '500',
    fontSize: 16
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    padding: 5,
    paddingHorizontal:25
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    backgroundColor:'white',
    height:40
  },
  micIcon: {
    marginLeft: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  listItemText: {
    marginLeft: 10,
  },
});

export default SearchScreen;