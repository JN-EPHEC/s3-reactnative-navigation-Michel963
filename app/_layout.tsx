import "react-native-reanimated";

import React from "react";
import { Button } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CourseListScreen from "./screens/CourseListScreen";
import CourseDetailScreen from "./screens/CourseDetailScreen";
import WishlistScreen from "./screens/WishlistScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SocialAppTabs from "./SocialAppTabs";
import EcommerceTabs from "./EcommerceTabs";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AllCoursesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CourseList"
        component={CourseListScreen}
        options={({ navigation }) => ({
          title: "All Courses",
          headerLeft: () => (
            <Button title="☰" onPress={() => (navigation as any).toggleDrawer?.()} />
          ),
        })}
      />
      <Stack.Screen
        name="CourseDetail"
        component={CourseDetailScreen}
        options={({ navigation }) => ({
          title: "Course Detail",
          headerLeft: () => (
            <Button title="☰" onPress={() => (navigation as any).toggleDrawer?.()} />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

function CoursesTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#007aff",
        tabBarInactiveTintColor: "#666",
      }}
    >
      <Tab.Screen
        name="AllCourses"
        component={AllCoursesStack}
        options={{ title: "All Courses", headerShown: false }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={({ navigation }) => ({
          title: "My Wishlist",
          headerShown: true,
          headerLeft: () => <Button title="☰" onPress={() => (navigation as any).toggleDrawer?.()} />,
        })}
      />
    </Tab.Navigator>
  );
}

export default function RootLayout() {
  return (
    <Drawer.Navigator initialRouteName="Courses" screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Courses" component={CoursesTabs} />
      <Drawer.Screen
        name="My Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          headerShown: true,
          title: "My Profile",
          headerLeft: () => <Button title="☰" onPress={() => (navigation as any).toggleDrawer?.()} />,
        })}
      />
  {/* No temporary entries: only assignment structure remains */}
    </Drawer.Navigator>
  );
}
