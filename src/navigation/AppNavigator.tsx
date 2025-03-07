import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CartScreen from '../screens/Cart';
import CheckoutScreen from '../screens/Checkout';
import HomeScreen from '../screens/Home';
import { CartProvider } from '../context/CartContext';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <CartProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Cart" component={CartScreen} />
                    <Stack.Screen name="Checkout" component={CheckoutScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </CartProvider>
    );
};

export default AppNavigator;