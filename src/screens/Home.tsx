import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useCart } from '../context/CartContext';
import { styles } from '../styles/globalStyles';
import { Props } from '../navigation/props';

const products = [
  { id: 1, name: 'Product A', price: 10 },
  { id: 2, name: 'Product B', price: 20 },
  { id: 3, name: 'Product C', price: 30 },
  { id: 4, name: 'Product D', price: 40 },
  { id: 5, name: 'Product E', price: 50 },
  { id: 6, name: 'Product F', price: 60 },
];

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { cart, addToCart } = useCart();
  const renderItem = ({ item }: { item: { id: number; name: string; price: number } }) => {
    // Check if the item is already in the cart
    const cartItem = cart.find(cartItem => cartItem.id === item.id);
    const quantity = cartItem ? cartItem.quantity : 0;
    return (
      <View style={styles.item}>
        {/* Conditionally display "(In Cart)" */}
        <Text style={styles.itemName}>
          {item.name} {quantity > 0 ? `(In Cart: ${quantity})`: ""} - ${item.price}
        </Text>
        <Button title="Add to Cart" onPress={() => addToCart(item)} />
      </View>
    );
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={styles.header}>Products</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem} // Use the properly defined function
      />
      <Button title="Go to Cart" onPress={() => navigation.navigate('Cart')} />
    </View>
  );
};

export default HomeScreen;