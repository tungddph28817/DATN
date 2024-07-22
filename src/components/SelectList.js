import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const CategorySelector = () => {
  const categories = ['Tất cả giày', 'Ngoài trời', 'Thể thao','Trẻ em','Nam','Nữ'];
  const [selectedCategory, setSelectedCategory] = useState('Ngoài trời');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chọn danh mục</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedButton,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.selectedText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
    marginRight: 10,
    width: 120,
    justifyContent: 'center',
    alignItems:'center',
    height: 40,
  },
  selectedButton: {
    backgroundColor: '#4A7AFF',
  },
  categoryText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  selectedText: {
    color: '#FFFFFF',
  },
});

export default CategorySelector;