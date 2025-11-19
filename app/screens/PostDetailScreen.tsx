import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function PostDetailScreen() {
  const route = useRoute();
  const { title, content } = route.params as { title: string; content: string };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  content: { fontSize: 16 },
});
