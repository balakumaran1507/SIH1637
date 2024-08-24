import React from 'react';
import { View, StyleSheet, FlatList, useWindowDimensions } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// Example product data
const products = [
  { id: '1', name: 'Fresh Apples', price: '$3.00/kg' },
  { id: '2', name: 'Organic Carrots', price: '$2.50/kg' },
  { id: '3', name: 'Farm Fresh Eggs', price: '$4.00/dozen' },
  // Add more products as needed
];

export default function HomeScreen() {
  const { width } = useWindowDimensions(); // Get screen width to determine layout

  // Determine the number of columns based on screen width
  const numColumns = width > 600 ? 2 : 1; // 2 columns for wider screens, 1 for smaller

  // Render a single product item
  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <View style={styles.productImagePlaceholder} />
      <ThemedText type="productName">{item.name}</ThemedText>
      <ThemedText type="productPrice">{item.price}</ThemedText>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ThemedText type="title">Farmers' Produce Store</ThemedText>
        <ThemedText type="subtitle">Fresh and Organic Produce Directly from the Farm</ThemedText>
      </View>
      
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        numColumns={numColumns} // Number of columns based on screen width
        columnWrapperStyle={styles.columnWrapper} // Style for columns
        contentContainerStyle={styles.productsContainer} // Style for container
      />

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Explore Our Produce</ThemedText>
        <ThemedText>
          Tap the Explore tab to view more products and details.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Get in Touch</ThemedText>
        <ThemedText>
          Have questions? Visit our Profile tab to contact us.
        </ThemedText>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9', // Light green background
  },
  header: {
    padding: 16,
    backgroundColor: '#4CAF50', // Fresh green for header background
    alignItems: 'center',
  },
  productsContainer: {
    padding: 16,
  },
  columnWrapper: {
    justifyContent: 'space-between', // Distribute columns with space
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    flex: 1, // Allow the card to take up available space
    elevation: 2, // Shadow for Android
    shadowColor: '#000000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productImagePlaceholder: {
    height: 120,
    backgroundColor: '#C8E6C9', // Light green placeholder for images
    marginBottom: 8,
    borderRadius: 8,
  },
  stepContainer: {
    padding: 16,
    marginBottom: 16,
  },
});
