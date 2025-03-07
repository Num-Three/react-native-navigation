import React from 'react';
import { View, Text, Button, Alert, FlatList } from 'react-native';
import { useCart } from '../context/CartContext';
import { styles } from '../styles/globalStyles';

const CheckoutScreen: React.FC<Props> = ({ navigation }) => {
  const { cart, clearCart } = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    console.log("HELLO!")
    setTimeout(() => {
      Alert.alert('Checkout Successful', 'Thank you for your purchase!', [
        { text: 'OK', onPress: () => { 
            clearCart(); 
            navigation.navigate('Home'); 
        }}
      ]);
    }, 100);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={styles.header}>Checkout</Text>
      <FlatList
        data={cart}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.name} - ${item.price} x {item.quantity}</Text>
        )}
      />
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>Total: ${totalPrice}</Text>
      <Button title="Checkout" onPress={handleCheckout} />
    </View>
  );
};

export default CheckoutScreen;
