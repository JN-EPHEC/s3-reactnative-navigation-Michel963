import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function CourseDetailScreen() {
  const route = useRoute();
  const { courseId, title, description } = route.params as {
    courseId: string;
    title: string;
    description: string;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{description}</Text>
      <Text style={styles.id}>ID: {courseId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 8 },
  desc: { fontSize: 16, marginBottom: 12 },
  id: { color: "#888" },
});
