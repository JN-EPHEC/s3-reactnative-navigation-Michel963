import React from "react";
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type CoursesStackParamList = {
  CourseList: undefined;
  CourseDetail: { courseId: string; title: string; description: string };
};

const courses = [
  { id: "c1", title: "Intro to React Native", description: "Learn the basics of React Native." },
  { id: "c2", title: "Advanced JavaScript", description: "Deep dive into JS features and patterns." },
  { id: "c3", title: "UI/UX for Developers", description: "Design principles for better interfaces." },
];

export default function CourseListScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<CoursesStackParamList, "CourseList">>();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Courses</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigation.navigate("CourseDetail", {
                courseId: item.id,
                title: item.title,
                description: item.description,
              })
            }
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 12 },
  item: { padding: 12, borderWidth: 1, borderColor: "#ddd", borderRadius: 6, marginBottom: 10 },
  title: { fontSize: 18, fontWeight: "600" },
  desc: { color: "#555" },
});
