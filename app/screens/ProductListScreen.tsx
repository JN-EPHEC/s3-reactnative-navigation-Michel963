import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type ShopStackParamList = {
  ProductList: undefined;
  ProductDetail: { productId: string; name: string; description: string };
};

const products = [
  { id: "1", name: "Laptop", description: "High performance laptop." },
  { id: "2", name: "Mouse", description: "Wireless mouse." },
  { id: "3", name: "Keyboard", description: "Mechanical keyboard." },
];

export default function ProductListScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<ShopStackParamList, "ProductList">>();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Products</Text>
      {products.map((product) => (
        <TouchableOpacity
          key={product.id}
          style={styles.item}
          onPress={() =>
            navigation.navigate("ProductDetail", {
              productId: product.id,
              name: product.name,
              description: product.description,
            })
          }
        >
          <Text style={styles.name}>{product.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  item: { padding: 12, borderWidth: 1, borderColor: "#ddd", borderRadius: 6, marginBottom: 10 },
  name: { fontSize: 18 },
});
