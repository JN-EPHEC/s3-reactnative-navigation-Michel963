import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Michel Abdo</Text>
      <Text style={styles.handle}>@michelabdo</Text>
      <Text style={styles.bio}>Course enthusiast and lifelong learner.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: "bold" },
  handle: { color: "#666", marginBottom: 8 },
  bio: { fontSize: 16 },
});
