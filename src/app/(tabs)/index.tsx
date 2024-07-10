import React from "react";
import { FlatList, Platform, View } from "react-native";

import posts from "@/assets/data/posts.json";
import PostListItem from "@/src/components/PostListItem";

const HomeScreen = () => {
    return (
        <View className="bg-white">
            <FlatList
                data={posts}
                className={
                    Platform.OS === "web" ? "bg-white items-center" : "bg-white"
                }
                renderItem={({ item }) => (
                    <PostListItem key={item.id} post={item} />
                )}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    gap: 10,
                    maxWidth: 512,
                    width: "100%",
                    alignItems: "center",
                }}
            />
        </View>
    );
};

export default HomeScreen;
