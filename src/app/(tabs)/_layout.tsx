import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function TabsLayouts() {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: "gray",
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarLabel: "Feeds",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            size={25}
                            name={focused ? "home" : "home-outline"}
                            color={color}
                            style={{ marginTop: 7 }}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="new"
                options={{
                    tabBarLabel: "Nova Postagem",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            size={30}
                            name={focused ? "add-circle" : "add-circle-outline"}
                            color={color}
                            style={{ marginTop: 7 }}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarLabel: "Ajustes",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            size={30}
                            name={
                                focused
                                    ? "person-circle-sharp"
                                    : "person-circle-outline"
                            }
                            color={color}
                            style={{ marginTop: 7 }}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
