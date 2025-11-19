import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type BlogStackParamList = {
  PostList: undefined;
  PostDetail: { postId: string; title: string; content: string };
};

const posts = [
  {
    title: "React Native is Awesome",
    content:
      "React Native lets you build mobile apps using JavaScript and React.",
  },
  {
    title: "State Management Tips",
    content:
      "Learn how to manage state efficiently in your React Native apps.",
  },
  {
    title: "UI Design Principles",
    content:
      "Good UI design improves user experience and engagement.",
  },
  {
    title: "Navigation in React Native",
    content:
      "React Navigation is the go-to library for routing in React Native.",
  },
];

export default function PostListScreen() {
  const navigation = useNavigation<
    NativeStackNavigationProp<BlogStackParamList, "PostList">
  >();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Blog Posts</Text>
      {posts.map((post, idx) => (
        <View key={idx} style={styles.buttonContainer}>
          <Button
            title={post.title}
            onPress={() =>
              navigation.navigate("PostDetail", {
                postId: String(idx + 1),
                title: post.title,
                content: post.content,
              })
            }
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  buttonContainer: { marginBottom: 12 },
});
