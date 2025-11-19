import React from "react";
import { Text, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductListScreen from "./screens/ProductListScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import CartScreen from "./screens/CartScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ShopStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: "Shop" }} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: "Product Detail" }} />
    </Stack.Navigator>
  );
}

export default function EcommerceTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Shop"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#ff6347",
        tabBarInactiveTintColor: "#777",
        tabBarIcon: ({ color }) => {
          let emoji = "";
          if (route.name === "Shop") emoji = "🛍️";
          if (route.name === "MyCart") emoji = "🧺";
          return <Text style={{ fontSize: 18, color }}>{emoji}</Text>;
        },
      })}
    >
      <Tab.Screen name="Shop" component={ShopStack} options={{ title: "Shop" }} />
      <Tab.Screen name="MyCart" component={CartScreen} options={{ title: "My Cart" }} />
    </Tab.Navigator>
  );
}
