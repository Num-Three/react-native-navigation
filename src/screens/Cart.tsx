import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useCart } from '../context/CartContext';
import { Props } from '../navigation/props';
import { styles } from '../styles/globalStyles';

const CartScreen: React.FC<Props> = ({ navigation }) => {
  const { cart, updateQuantity } = useCart();

  return (
    <View style={{ padding: 20 }}>
        <Text style={styles.header}>Cart</Text>
      {cart.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemName}>{item.name} - ${item.price} x {item.quantity} = ${item.price * item.quantity}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Button title="+" onPress={() => updateQuantity(item.id, 1)} />
                <Button title="-" onPress={() => updateQuantity(item.id, -1)} />
              </View>
            </View>
          )}
        />
      )}
      <Button title="Proceed to Checkout" onPress={() => navigation.navigate('Checkout')} />
    </View>
  );
};

export default CartScreen;
